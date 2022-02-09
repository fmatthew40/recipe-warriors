// async function upvoteClickHandler(event) {
//   event.preventDefault();

//   const id = window.location.toString().split('/')[
//     window.location.toString().split('/').length - 1
//   ];
//   const response = await fetch('/api/posts/upvote', {
//     method: 'PUT',
//     body: JSON.stringify({
//       post_id: id
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   if (response.ok) {
//     document.location.reload();
//   } else {
//     alert(response.statusText);
//   }
// }

// document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);





async function starFormHandler(event) {
  event.preventDefault();
  const star_rating = event.target.getAttribute('data-alt');//document.querySelector('.solid-stars').value;
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  console.log(`star rating: ${star_rating}`)
  if (star_rating) {
    const response = fetch('/api/posts/upvote', {
      method: 'PUT',
      body: JSON.stringify({
        post_id,
        star_rating
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      console.log();
      document.location.reload();
    } else {
      // alert(response.statusText);
    }
  }
}

document.querySelector('.solid-stars').addEventListener('click', starFormHandler);