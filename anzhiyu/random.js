var posts=["2025/04/26/HelloWorld/","2025/05/10/download-mc/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };