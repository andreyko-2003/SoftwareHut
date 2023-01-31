import { createDeliveryClient } from '@kontent-ai/delivery-sdk'

const deliveryClient = createDeliveryClient({
    projectId: 'a7e17d8d-96f6-007f-162d-e7e8ae5dea35'
});

export async function getSidebar() {
    var sidebar = [];
    await deliveryClient
    .items()
    .type('sidebar')
    .toPromise()
    .then((res) => {
        let bar = res.data.items[0];
        sidebar.push({
            title: bar.elements.title.value,
            description: bar.elements.description.value,
            github: bar.elements.github_link.value,
            facebook: bar.elements.facebook_link.value,
            instagram: bar.elements.instagram_link.value,
        })
    })
    return sidebar;
  }