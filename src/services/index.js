  export const getPostsService = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}`);
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.data;
  };
  
  
  export const getSinglePostService = async  (id) => {
    const response = await fetch (`${process.env.REACT_APP_BACKEND}/post/$(id)`)
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message);
}
return json.data 
  }
  