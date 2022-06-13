// https://api.artic.edu/api/v1/artworks/126414 #espejo-negro
// https://api.artic.edu/api/v1/artworks/137125 #many-mansions
// https://api.artic.edu/api/v1/artworks/117266 #nightlife
// https://api.artic.edu/api/v1/artworks/191556 #the-room-no-vi
// https://api.artic.edu/api/v1/artworks/102611 #veranda-post-opo-ogoga
// https://api.artic.edu/api/v1/artworks/151363 #weaving
// /artworks/{id}

// fields
// https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,date_display,main_reference_number

// Declarations for the Artwork
let art;
let showArtInfo;

//  The Art Institute of Chicago request - No user login needed because it's free... I think...


// Function to get Art Info when image figure is clicked
/**
 * @param art_index
 * @param info_index
 * 
 * The function gets art information from The Art Institute of Chicago using the art_index of our gallery.
 * Then finds the correct info_index inside of the JSON response data from The Art Institute
 * of Chicago which will produce a description that will be shown when you click the art.
 */

async function clickedEvent(art_index, info_index) {
    //  Get Art Id
    let elem = document.getElementsByTagName('img')[art_index]
    let id = elem.attributes[2].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,date_display,main_reference_number`, {
        method: 'GET',
        headers: headers
});
    let result = await fetch(request);
    let response = await result.json();

    console.log(response)

    if (showArtInfo) {
        stopShow();
      } else{
        let title = response.data.title;
        let artist = response.data['artist_display']
        let date = response.data['date_display']
        let div = document.createElement("div");
        div.innerHTML = `<br>Title: ${title}<br>Artist: ${artist}<br>Date Display: ${date}`;
        elem.parentElement.appendChild(div);
      }
    }

 /**
  * @param id
  * @param event
  * 
  * id = image id for gallery image
  * event = Mouse event given by the action from our user
  * 
  * Function produces art information from the clickedEvent based 
  * on index of image.
  */

 function getArt(id, event){
    switch(id){
        case 'blackmirror' : {
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'manymansions' : {
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'nightlife' : {
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'room' : {
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'opo' : {
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        } 
        case 'weaving' : {
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
    }
 }
    