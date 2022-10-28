




const storageRef = ref(storage, "some-child");

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
  console.log("Uploaded a blob or file!");
});