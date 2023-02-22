import { useModalStore } from '@/store/modal';
import { database, storage } from '@/utils/firebase';
import { ref as databaseRef, push, child, get } from 'firebase/database'
import { ref as storageRef, uploadBytesResumable, getDownloadURL, StorageError, deleteObject } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useFirebase = () => {
    const [imgUploadProgress, setImgUploadProgress] = useState<number>(0)
    const [imgUrl, setImgUrl] = useState<string>('')
    const [error, setError] = useState<StorageError>()
    const [imgLoaded, setImgLoaded] = useState<boolean>()
    const [imgPath, setImagePath] = useState<string>('')
    const [fetchedPosts, setFetchedPosts] = useState()
    const { closeModal, formData, setFormData } = useModalStore()

    const uploadFile = (file: File) => {
        const filePath = `images/${uuidv4()}/${file.name}`
        console.log(filePath)
        setImgLoaded(false)
        setImagePath(filePath)

        const sRef = storageRef(storage, filePath);
        const uploadTask = uploadBytesResumable(sRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setImgUploadProgress(progress);
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await getDownloadURL(sRef);
            setImgUrl(url);
            setImgLoaded(true);
        });
    };

    const postFormData = () => {
        console.log(formData)
        const newKey = databaseRef(database, 'posts/');
        // Add the data to the database with the unique ID
        const pushData = push(newKey, formData);

        pushData.then(() => {
            console.log('Uploaded')
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            closeModal();
        })
    }

    const getPosts = () => {
        const dbRef = databaseRef(database)
        get(child(dbRef, 'posts')).then((snapshot) => {
            if (snapshot.exists()) {
                setFetchedPosts(snapshot.val());
            } else {
                console.log('No data available');
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        getPosts();
    }, [])

    useEffect(() => {
        const allFieldsSet = Object.values(formData).every((value) => value !== null && value !== '');
        allFieldsSet && postFormData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData])

    const deleteImg = (imgPath: string) => {
        const fileRef = storageRef(storage, imgPath);

        deleteObject(fileRef).then(() => {
            setFormData({ imgUrl: '' })
        })
    }

    return { imgLoaded, fetchedPosts, imgUrl, error, imgPath, imgUploadProgress, uploadFile, postFormData, deleteImg, getPosts };
};