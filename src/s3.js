import { S3Client } from "@aws-sdk/client-s3"
const s3 = S3Client();

exports.getFileFromBucket = (bucket, key) => s3.getObject({
    Bucket: bucket,
    Key: key
}).promise();