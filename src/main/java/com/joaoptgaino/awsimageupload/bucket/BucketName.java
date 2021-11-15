package com.joaoptgaino.awsimageupload.bucket;

public enum BucketName {
    PROFILE_IMAGE("joaoptgaino-image-upload");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }


    public String getBucketName() {
        return bucketName;
    }
}
