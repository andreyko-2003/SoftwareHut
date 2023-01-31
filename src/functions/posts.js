import { createDeliveryClient } from '@kontent-ai/delivery-sdk'

const deliveryClient = createDeliveryClient({
    projectId: 'a7e17d8d-96f6-007f-162d-e7e8ae5dea35'
});

export async function getPosts() {
  var posts = [];
  await deliveryClient
  .items()
  .type('blog_article')
  .orderParameter('elements.publication_date', 'desc')
  .toPromise()
  .then((res) => res.data.items.map((post) => 
    posts.push({
      id: post.system.id,
      url: post.elements.url.value,
      title: post.elements.title.value,
      date: post.elements.publication_date.value,
      description: post.elements.summary.value.slice(0, 100),
      image: post.elements.image.value[0].url,
      imageLabel: post.elements.image.value[0].description || 'Image Text'
    })
  ));
  return posts;
}

export async function getPost(url) {
  var postData = [];
  await deliveryClient
  .items()
  .type('blog_article')
  .equalsFilter('elements.url', url)
  .toPromise()
  .then((res) => {
    let post = res.data.items[0] ? res.data.items[0] : window.location.href = '/404';
    postData.push({
      title: post.elements.title.value,
      date: post.elements.publication_date.value,
      description: post.elements.summary.value,
      image: post.elements.image.value,
      content: post.elements.content.value,
      imageLabel: post.elements.image.value[0].description || 'Image Text'
    })
  });
  return postData;
}
