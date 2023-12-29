import React from "react";

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags = [] }: TagsProps) => {
  return (
    <div className="flex flex-wrap">
      <p className="capitalize p-0.5 mr-2 text-xs font-semibold my-1">Tags:</p>
      {tags.map((tag, k) => (
        <p
          key={"_tag_" + k}
          className="border border-gray-200 capitalize p-0.5 px-1 mr-1 my-1 text-xs rounded-md"
        >
          {tag}
        </p>
      ))}
    </div>
  );
};
export default Tags;
