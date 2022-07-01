async function getData(category) {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=d03a9c8356e0be74d5c4f447dcf68fd7&language=en-US&page=1`)
    let data = (await response.json()).results;
    console.log(data)
    display(data)

    $("#searchMovie").keyup(function () {
        let inp_val = $("#searchMovie").val()
        let temp = ""
        data.forEach(element => {
            if ((element.original_title).toLowerCase().includes(inp_val.toLowerCase())) {
                temp += `<div class="col-md-6 col-lg-4 my-3">
    <div class="box shadow rounded position-relative">
        <div class="poster">
            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="img-fluid" alt="">
            <div class="overlayer d-flex align-items-center justify-content-center">
            <div class="info p-0">
                <h2>${element.original_title}</h2>
                <p>${element.overview}</p>
                <p>${element.vote_average}.</p>
                <p>${element.release_date}</p>
            </div>
            </div>
        </div>
       
    </div>
  </div>`
            }
        })
        $("#movie").html(temp);
    })
}

(async function (category = 'popular') {
    await getData(category)
})()

function display(data) {
    let temp = [];
    data.forEach(element => {
        temp += `<div class="col-md-6 col-lg-4 my-3">
    <div class="box shadow rounded position-relative">
        <div class="poster">
            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="img-fluid" alt="">
            <div class="overlayer d-flex align-items-center justify-content-center">
            <div class="info p-0">
                <h2>${element.original_title}</h2>
                <p>${element.overview}</p>
                <p>${element.vote_average}.</p>
                <p>${element.release_date}</p>
            </div>
            </div>
        </div>
       
    </div>
  </div>`
    });
    $("#movie").html(temp);
}


$(".close").click(function (e) {
    if ($(".main .aside .nav-bar").css("left") == "256px") {
        $(".main .aside .nav-bar").css("left", "0px")
        $(".main .aside .nav-menu").css("transform", "translateX(-100%)")
        $(".close").html(`<i class="fa-solid fa-bars"></i>`)

    }
    else {
        $(".main .aside .nav-bar").css("left", "256px")
        $(".main .aside .nav-menu").css("transform", "none")
        $(".close").html(`<i class="fa-solid fa-xmark"></i>`)

    }
    console.log(e.target);
})
/* Stop Refresh */
$(function () {
    $("a").click(function () {
        $.get("set_interesantes.php?n=Frank Melo&u=f6e79cfe9c0ecc4c08dac4c860c4802b&back=http://localhost:8085/Something/success/profile.php?search_user=f6e79cfe9c0ecc4c08dac4c860c4802b&p=12&sa=f6e79cfe9c0ecc4c08dac4c860c4802b&i=2345123&dl=&iv=1");

        return false;
    });
});
/* End */
$(".main .aside .nav-menu .nav-item ul li a").click(function (e) {
    let category;
    let id = e.target.id
    switch (id) {
        case "now_playing":
            category = id;
            break;
        case "popular":
            category = id;
            break;
        case "top_rated":
            category = id;
            break;
        case "trending":
            category = id;
            break;
        case "upcoming":
            category = id;
            break;
        case "contact":
            category = id;
            break;
        default: console.log("Error")

    }
    if (category == "trending") {
        async function api() {
            let response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=d03a9c8356e0be74d5c4f447dcf68fd7`)
            let data = (await response.json()).results
            display(data)
        }
        api()

    }
    else if (category == "contact") {
        /* let Href = $(this).attr("href")
        console.log(Href); */
        let topOffset = $("#contactUs").offset().top
        console.log(topOffset);
        $("html,body").animate({ scrollTop: topOffset }, 500)
    }
    else {
        getData(category)
    }

})

$("#apisearch").keyup(function () {
    let movie = $("#apisearch").val()
    async function api() {
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=d03a9c8356e0be74d5c4f447dcf68fd7&page=2
    }`)
        let data = (await response.json()).results
        display(data)
    }
    api()

})



let mail_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let pass_regex = /^[\s\S]{8,32}$/;
let name_regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
let phone_regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

$("#name").keyup(function () {
    if (!name_regex.test($("#name").val())) {
        $("#name-alert").css("display", "block")
    }
})
$("#mail").keyup(function () {
    if (!mail_regex.test($("#mail").val())) {
        $("#mail-alert").css("display", "block")
    }
})
$("#pass").keyup(function () {
    if (!name_regex.test($("#pass").val())) {
        $("#pass-alert").css("display", "block")
    }
})
$("#phone").keyup(function () {
    if (!name_regex.test($("#phone").val())) {
        $("#phone-alert").css("display", "block")
    }
})
$("#cpass").keyup(function () {
    console.log($("#pass").val() != $("#cpass").val());
    if ($("#pass").val() != $("#cpass").val()) {
        $("#cpass-alert").css("display", "block")
    }
})

