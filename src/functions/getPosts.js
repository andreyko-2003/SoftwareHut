import { createDeliveryClient } from '@kontent-ai/delivery-sdk'

const deliveryClient = createDeliveryClient({
    projectId: 'f3d33e00-84dd-00c4-ae15-8b406518d035'
});

export async function getPosts() {
  var posts = [];
  await deliveryClient
  .items('untitled_content_type')
  .orderParameter('system.lastModified', 'desc')
  .toPromise()
  .then((res) => res.data.items.map((post) => {
    posts.push({
      id: post.system.id,
      title: post.elements.name.value,
      date: post.system.lastModified,
      description: post.elements.text.value.slice(0, 100),
      image: post.elements.photo.value[0].url,
      imageLabel: 'Image Text'
    });
  }));
  return posts;
}

export async function getPostById(id) {
  var post = [];
  await deliveryClient
  .items('untitled_content_type')
  .equalsFilter('system.id', id)
  .toPromise()
  .then((res) =>
    post.push({
      title: res.data.items[0].elements.name.value,
      date: res.data.items[0].system.lastModified,
      description: res.data.items[0].elements.text.value,
      image: res.data.items[0].elements.photo.value,
      imageLabel: 'Image Text'
    })
  );
  return post;
}
