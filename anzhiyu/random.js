var posts=["2025/04/26/HelloWorld/","2025/05/10/download-mc-bedrock/","2025/05/14/download-mc-java/","2025/05/17/download-vscode/","2025/05/17/download-ts/","2025/05/14/sapi-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };