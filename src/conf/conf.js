const conf = {
    appwirteApiEndpointUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwirteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwirteDatebaseId : String(import.meta.env.VITE_APPWRITE_DATEBASE_ID),
    appwirteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwirteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf