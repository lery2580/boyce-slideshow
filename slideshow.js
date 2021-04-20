// whenever we load the page, always display the first slide

var currentSlide = 0


// here we find how many slides we have using the .length property
// this is useful because we can use it as our max slide value

var totalSlides = $('.holder div').length


// setInterval allows us to run a function every x amount of time

var autoSlide = setInterval(function(){

    // 1. increment our currentSlide value by reassigning it and incrementing it by 1

    currentSlide = currentSlide +1
    // 2. we are going to turn our currentSlide value into a vw unit
    var vwUnit = -currentSlide * 100
    var leftPosition = vwUnit + 'vw'

    // 3. pass the vw unit into our css method below


    // here we grab the holder and change it to the second slide
    $('.holder').css('left',leftPosition)


}, 3000)


$('.next').on('click', function(){
    // this is going to cancel our autoSlide interval function
    // as the user has taken over control of the slideshow
    clearInterval(autoSlide)
    // here we call the nextSlide funciton and go to the next slide

    nextSlide()


})

// 1. a function that deals with taking us to the next slide 
// 2. a function that deals with taking us to the previous slide 
// we also have setTimeout, which is the same,but runs only once

var previousSlide = function(){
    // this is identical to our nextSlide function, apart from that we are decrementing the currentSlide value (taking us back rather than forwards)

    currentSlide = currentSlide -1
    var leftPosition = (-currentSlide * 100) + 'vw'
    $('.holder').css('left', leftPosition)



}