// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS,
  region: process.env.AWS_S3_REGION,
});

const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function uploadToS3(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let { file } = JSON.parse(req.body);

    console.log("file", req.body);
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: file.name,
      ACL: "public-read",
      ContentType: file.type,
    };
    console.log(params);

    const url = await s3.getSignedUrlPromise("putObject", params);

    // const result = await s3.upload(params).promise();
    res.status(200).json({ url: url });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
