var posts=["2025/04/24/hello-world/","2025/04/25/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };