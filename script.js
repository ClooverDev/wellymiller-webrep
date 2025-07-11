$(document).ready(function(){

    const BOOKS = {
        "A QUARTA PAREDE" : $("#BOOK_AQUARTAPAREDE"),
        "A DIMENSÃO DO VIDRO" : $("#BOOK_ADIMENSAODOVIDRO"),
        "CONTRA-PAREDE" : $("#BOOK_CONTRAPAREDE"),
        "A MINHA NOITE ESTRELADA" : $("#BOOK_MINHANOITEESTRELADA")
    }

    const hostname = window.location.hostname;
    const website = "wm.clooverlandstudios.com"

    function open_book(URL, isBW) {
        console.log('Opening book...')

        if (hostname == website) {
            if (isBW) {
                window.open("https://"+website+"/livros/preto-e-branco/"+URL, "_blank")
            } else {
                window.open("https://"+website+"/livros/"+URL, "_blank")
            }

        } else {
            if (isBW) {
                window.open("livros/preto-e-branco/"+URL+".html", "_blank")
            } else {
                window.open("livros/"+URL+".html", "_blank")
            }
        }
    }


    BOOKS["A QUARTA PAREDE"].click(function(){
        open_book("aquartaparede", false);
    })

    BOOKS["A DIMENSÃO DO VIDRO"].click(function(){
        open_book("adimensaodovidro", false);
    })

    BOOKS["CONTRA-PAREDE"].click(function(){
        open_book("contraparede", false)
    })

    BOOKS["A MINHA NOITE ESTRELADA"].click(function(){
        open_book("aminhanoiteestrelada", false);
    })

    //////////////////////////////////////////////////////////////////////////////////////

    function open_url(URL) {
        window.open(URL, "_blank")
    }

    const SOCIALMEDIAS = {
        "INSTAGRAM" : $("#SM-INSTA"),
        "TWITTER/X" : $("#SM-TWX"),
        "TIKTOK" : $("#SM-TTK"),
        "BLUESKY" : $("#SM-BSK"),
    }

    const LINKS = {
        "INSTAGRAM" : "https://www.instagram.com/welly.escritora/",
        "TWITTER/X" : "https://x.com/Bey7w7",
        "TIKTOK" : "https://www.tiktok.com/@wellymi7",
        "BLUESKY" : "https://bsky.app/profile/bwelly.bsky.social",
    }

    SOCIALMEDIAS["INSTAGRAM"].click(function(){
        open_url(LINKS["INSTAGRAM"]);
    })

    SOCIALMEDIAS["TWITTER/X"].click(function(){
        open_url(LINKS["TWITTER/X"]);
    })

    SOCIALMEDIAS["TIKTOK"].click(function(){
        open_url(LINKS["TIKTOK"]);
    })

    SOCIALMEDIAS["BLUESKY"].click(function(){
        open_url(LINKS["BLUESKY"]);
    })

})
