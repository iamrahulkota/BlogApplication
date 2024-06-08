import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){

        this.client
            .setEndpoint(conf.appwirteApiEndpointUrl) 
            .setProject(conf.appwirteProjectId); 
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
        
    }


    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwirteDatebaseId,
                conf.appwirteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error",error);
        }
    }


    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwirteDatebaseId,
                conf.appwirteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }


    //Slug === doucumentId
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwirteDatebaseId,
                conf.appwirteCollectionId,
                slug
            );
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }


    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwirteDatebaseId,
                conf.appwirteCollectionId,
                slug    
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }


    async getsPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwirteDatebaseId,
                conf.appwirteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }


    //file upload Services
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwirteBucketId,
                ID.unique(),
                file

            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwirteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }


    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwirteBucketId,
            fileId
        )
    }
}

const service = new Service(); // object

export default service