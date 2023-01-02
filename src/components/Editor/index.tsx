import React, { Component, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import parser from "html-react-parser";

let quill: any;

type Props = {
  onChange: (e: any) => void;
};

class Editor extends Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {
      editorHtml: `<p>Testing new features</p><p>Here is an image:<img src="https://amruths-blog-images.s3.ap-south-1.amazonaws.com/images/Screenshot%202022-08-13%20at%2012.27.32%20AM.png"></p><p><br></p><p>Ending note.</p><p>Thank you for reading.</p><p><br></p><p>Amruth Kuntamalla</p><p><a href="https://AmruthKuntamalla.live" rel="noopener noreferrer" target="_blank">https://www.AmruthKuntamalla.live</a></p>`,
      theme: "snow",
      showPreview: true,
      splitView: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html: any) {
    this.setState({
      editorHtml: html,
    });
    // @ts-ignore
    this.props.onChange(html);
  }

  uploadImage = async (file: any) => {
    return new Promise((resolve, reject) => {
      // upload file
      console.log(file, {
        file: {
          name: "images/" + file.name,
          type: file.type,
        },
      });

      fetch("/api/upload-s3", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "POST",
        body: JSON.stringify({
          file: {
            name: "images/" + file.name,
            type: file.type,
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          const url = res.url;
          console.log("url", url);
          axios
            .put(url, file, {
              headers: {
                "Content-Type": file.type,
                "Access-Control-Allow-Origin": "*",
              },
            })

            .then((res) => {
              let uploadedURL =
                "https://amruths-blog-images.s3.ap-south-1.amazonaws.com/images/" +
                encodeURI(file.name);
              console.log(uploadedURL);
              resolve(uploadedURL);
            })
            .catch((err) => {
              console.log(err);
              reject(err);
            });
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  handleImage = () => {
    try {
      const input = document.getElementById("image");
      console.log(input);

      if (!input) {
        return;
      }

      input.click();

      input.onchange = async (e) => {
        // @ts-ignore
        const file = e.target.files[0];
        console.log(file);

        let url = await this.uploadImage(file);

        const range = quill.getEditorSelection();
        console.log(range);
        quill.getEditor().insertEmbed(range.index, "image", url, "user");
      };
    } catch (error) {
      console.log(error);
    }
  };

  render(): React.ReactNode {
    const { editorHtml, splitView, showPreview }: any = this.state || {};
    return (
      <div>
        {/* show preview */}
        <div className="flex justify-end">
          <button
            className="bg-gray-200 ml-3 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => {
              this.setState({
                splitView: !splitView,
              });
            }}
          >
            {splitView ? "Full View" : "Split View"}
          </button>
        </div>

        <div
          className={
            splitView ? "grid grid-cols-2 gap-2" : "grid grid-cols-1 gap-2"
          }
        >
          {showPreview && (
            <div className="border-r border-r-gray-300">
              <ReactQuill
                ref={(el) => {
                  quill = el;
                }}
                theme="bubble"
                modules={{
                  toolbar: {
                    container: [
                      [{ header: [1, 2, false] }],
                      ["bold", "italic", "underline"],
                      ["blockquote", "code-block", "align", "direction"],
                      [{ list: "ordered" }, { list: "bullet" }],
                      ["link", "image"],
                      ["clean"],
                      // align
                      [{ align: [] }],
                    ],

                    handlers: {
                      image: this.handleImage,
                    },
                  },
                }}
                placeholder="Write something amazing..."
                onChange={(content, delta, source, editor) => {
                  console.log(content);
                  this.handleChange(content);
                }}
                value={editorHtml}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
              <input className="hidden" type={"file"} id="image" />
            </div>
          )}

          {splitView && (
            <div className="prose">
              View Only
              {parser(editorHtml)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Editor;
