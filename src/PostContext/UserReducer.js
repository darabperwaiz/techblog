
export function userReducer(user, action) {
    switch (action.type) {
        case 'SET_USER': {
            console.log("From ",action.payload)
            return {
                ...user,
                User: action.payload  
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
          }
    }
}


export const initialState = {
    User: []
}


// export const initialState = [
//     {
//         id: 1,
//         title: 'Top 10 phone applications and 2045 mobile design awards',
//         thumbnail: 'https://ipubuzz.com/wp-content/uploads/2021/03/best-productivity-apps-2020-1400x1050-1.png',
//         description: 'Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.',
//         category: 'Gadgets',
//         date: '21 JULY 2045',
//         slug: 'top-10-phone-applications-and-2045-mobile-design-awards'
//     },

//     {
//         id: 2,
//         title: 'A device you can use both headphones and usb',
//         thumbnail: 'https://i.pinimg.com/originals/12/42/d2/1242d23d778cd20f860b842b53261f99.png',
//         description: 'Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.',
//         category: 'Technology',
//         date: '21 JULY 2045',
//         slug: 'a-device-you-can-use-both-headphones-and-usb'
//     },

//     {
//         id: 3,
//         title: 'Two brand new laptop models from ABC computer',
//         thumbnail: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?cs=srgb&dl=pexels-pixabay-356056.jpg&fm=jpg',
//         description: 'Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.',
//         category: 'Development',
//         date: '21 JULY 2045',
//         slug: 'two-brand-new-laptop-models-from-abc-computer'
//     },
    
//     {
//         id: 4,
//         title: 'Applications for taking photos of nature in your mobile phones',
//         thumbnail: 'https://static1.anpoimages.com/wordpress/wp-content/uploads/2020/10/02/samsung-galaxy-s20-fe-2-scaled.jpg',
//         description: 'Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.',
//         category: 'Design',
//         date: '21 JULY 2045',
//         slug: 'applications-for-taking-photos-of-nature-in-your-mobile-phones'
//     }
// ]