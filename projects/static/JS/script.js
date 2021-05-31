console.log('Rate projects')

// Get all the ratings for design
const designFirst=document.getElementById('design-first')
const designSecond=document.getElementById("design-second")
const designThird=document.getElementById("design-third")
const designFourth=document.getElementById("design-fourth")
const designFifth=document.getElementById("design-fifth")
const designSixth=document.getElementById("design-sixth")
const designSeventh=document.getElementById("design-seventh")
const designEighth=document.getElementById("design-eighth")
const designNinth=document.getElementById("design-ninth")
const designTenth=document.getElementById("design-tenth")

// Get all the ratings for usability
const usabilityFirst=document.getElementById('usability-first')
const usabilitySecond=document.getElementById("usability-second")
const usabilityThird=document.getElementById("usability-third")
const usabilityFourth=document.getElementById("usability-fourth")
const usabilityFifth=document.getElementById("usability-fifth")
const usabilitySixth=document.getElementById("usability-sixth")
const usabilitySeventh=document.getElementById("usability-seventh")
const usabilityEighth=document.getElementById("usability-eighth")
const usabilityNinth=document.getElementById("usability-ninth")
const usabilityTenth=document.getElementById("usability-tenth")

// Get all the ratings for content
const contentFirst=document.getElementById('content-first')
const contentSecond=document.getElementById("content-second")
const contentThird=document.getElementById("content-third")
const contentFourth=document.getElementById("content-fourth")
const contentFifth=document.getElementById("content-fifth")
const contentSixth=document.getElementById("content-sixth")
const contentSeventh=document.getElementById("content-seventh")
const contentEighth=document.getElementById("content-eighth")
const contentNinth=document.getElementById("content-ninth")
const contentTenth=document.getElementById("content-tenth")

// get the forms
const designRateForm=document.querySelector('.design-rate-form')
const designConfirmBox=document.getElementById('design-confirm-box')
// get the csrf
const csrf=document.getElementsByName('csrfmiddlewaretoken')
// get overall rating
const overallRating=document.getElementById('overall-rating')

// DESIGN RATING 
//optimise the function to hover over the buttons and get that particular value
const handleButtonSelect =(size) =>{
    const designChildren=designRateForm.children
    for (let i =0; i < designChildren.length; i++){
        if (i <= size){
            designChildren[i].classList.add('design-checked')
        }
        else{
            designChildren[i].classList.remove('design-checked')
        } 
    }
}

// function to change the background colour once someone hovers over a rating number
const handleSelect=(selection) =>{
    switch(selection){
        case 'design-first':{
            // designFirst.classList.add('design-checked')
            // designSecond.classList.remove('design-checked')
            // designThird.classList.remove('design-checked')
            // designFourth.classList.remove('design-checked')
            // designFifth.classList.remove('design-checked')
            // designSixth.classList.remove('design-checked')
            // designSeventh.classList.remove('design-checked')
            // designEighth.classList.remove('design-checked')
            // designNinth.classList.remove('design-checked')
            // designTenth.classList.remove('design-checked')
            handleButtonSelect(1)
            return
        }
        case 'design-second':{
            handleButtonSelect(2)
            return
        }
        case 'design-third':{
            handleButtonSelect(3)
            return
        }
        case 'design-fourth':{
            handleButtonSelect(4)
            return
        }
        case 'design-fifth':{
            handleButtonSelect(5)
            return
        }
        case 'design-sixth':{
            handleButtonSelect(6)
            return
        }
        case 'design-seventh':{
            handleButtonSelect(7)
            return
        }
        case 'design-eighth':{
            handleButtonSelect(8)
            return
        }
        case 'design-ninth':{
            handleButtonSelect(9)
            return
        }
        case 'design-tenth':{
            handleButtonSelect(10)
            return
        }
    }
}

// change the values from string to numeric values
const getNumericValue=(stringValue) =>{
    let numericValue;
    if (stringValue === 'design-first'){
        numericValue = 1
    }
    else if (stringValue === 'design-second'){
        numericValue=2
    }
    else if (stringValue === 'design-third'){
        numericValue=3
    }
    else if (stringValue === 'design-fourth'){
        numericValue=4
    }
    else if (stringValue==='design-fifth'){
        numericValue=5
    }
    else if (stringValue==='design-sixth'){
        numericValue=6
    }
    else if (stringValue==='design-seventh'){
        numericValue=7
    }
    else if (stringValue==='design-eighth'){
        numericValue=8
    }
    else if (stringValue==='design-ninth'){
        numericValue=9
    }
    else if (stringValue==='design-tenth'){
        numericValue=10
    }
    else{
        numericValue=0 
    } 
    return numericValue  
}

if (designFirst){
    const designArr=[designFirst, designSecond, designThird, designFourth, designFifth, designSixth, designSeventh, designEighth, designNinth, designTenth]

    designArr.forEach(item => item.addEventListener('mouseover', (event)=>{
        handleSelect(event.target.id)
    }))

    designArr.forEach(item => item.addEventListener('click', (event)=>{
        const val=event.target.id


        designRateForm.addEventListener('submit', (event)=>{
            event.preventDefault()
            const id=event.target.id
            console.log(id)
            const valueNum=getNumericValue(val)

            $.ajax({
                type:'POST',
                url:'/rateoneproject/',
                data:{
                    'csrfmiddlewaretoken':csrf[0].value,
                    'el_id':id,
                    'val':valueNum
                },
                success: function(response){
                    console.log(response)
                    designConfirmBox.innerHTML=`<p>Design Rating:${response.designrate}</p>`
                },
                error: function(error){
                    console.log(error)
                    designConfirmBox.innerHTML='<p>Oooops .... something went wrong </p>'
                }
            })
        })
    }))

}

// USABILITY RATING
// get the forms
const usabilityRateForm=document.querySelector('.usability-rate-form')
const usabilityConfirmBox=document.getElementById('usability-confirm-box')
//optimise the function to hover over the buttons and get that particular value
const handleButtonUsabilitySelect =(size) =>{
    const usabilityChildren=usabilityRateForm.children
    for (let i =0; i < usabilityChildren.length; i++){
        if (i <= size){
            usabilityChildren[i].classList.add('usability-checked')
        }
        else{
            usabilityChildren[i].classList.remove('usability-checked')
        } 
    }
}

// function to change the background colour once someone hovers over a rating number
const handleUsabilitySelect=(selection) =>{
    switch(selection){
        case 'usability-first':{
            handleButtonUsabilitySelect(1)
            return
        }
        case 'usability-second':{
            handleButtonUsabilitySelect(2)
            return
        }
        case 'usability-third':{
            handleButtonUsabilitySelect(3)
            return
        }
        case 'usability-fourth':{
            handleButtonUsabilitySelect(4)
            return
        }
        case 'usability-fifth':{
            handleButtonUsabilitySelect(5)
            return
        }
        case 'usability-sixth':{
            handleButtonUsabilitySelect(6)
            return
        }
        case 'usability-seventh':{
            handleButtonUsabilitySelect(7)
            return
        }
        case 'usability-eighth':{
            handleButtonUsabilitySelect(8)
            return
        }
        case 'usability-ninth':{
            handleButtonUsabilitySelect(9)
            return
        }
        case 'usability-tenth':{
            handleButtonUsabilitySelect(10)
            return
        }
    }
}

// change the values from string to numeric values
const getUseNumericValue=(stringValue) =>{
    let numericUseValue;
    if (stringValue === 'usability-first'){
        numericUseValue = 1
    }
    else if (stringValue === 'usablity-second'){
        numericUseValue=2
    }
    else if (stringValue === 'usability-third'){
        numericUseValue=3
    }
    else if (stringValue === 'usability-fourth'){
        numericUseValue=4
    }
    else if (stringValue==='usability-fifth'){
        numericUseValue=5
    }
    else if (stringValue==='usability-sixth'){
        numericUseValue=6
    }
    else if (stringValue==='usability-seventh'){
        numericUseValue=7
    }
    else if (stringValue==='usability-eighth'){
        numericUseValue=8
    }
    else if (stringValue==='usability-ninth'){
        numericUseValue=9
    }
    else if (stringValue==='usability-tenth'){
        numericUseValue=10
    }
    else{
        numericUseValue=0 
    } 
    return numericUseValue  
}

if (usabilityFirst){
    const usabilityArr=[usabilityFirst, usabilitySecond, usabilityThird, usabilityFourth, usabilityFifth, usabilitySixth, usabilitySeventh, usabilityEighth, usabilityNinth, usabilityTenth]

    usabilityArr.forEach(item => item.addEventListener('mouseover', (event)=>{
        handleUsabilitySelect(event.target.id)
    }))

    usabilityArr.forEach(item => item.addEventListener('click', (event)=>{
        const useVal=event.target.id


        usabilityRateForm.addEventListener('submit', (event)=>{
            event.preventDefault()
            const id=event.target.id
            console.log(id)
            const valueUsabilityNum=getUseNumericValue(useVal)

            $.ajax({
                type:'POST',
                url:'/rateuseproject/',
                data:{
                    'csrfmiddlewaretoken':csrf[0].value,
                    'el_id':id,
                    'useVal':valueUsabilityNum
                },
                success: function(response){
                    console.log(response)
                    usabilityConfirmBox.innerHTML=`<p>Usability Rating:${response.usabilityrate}</p>`
                },
                error: function(error){
                    console.log(error)
                    usabilityConfirmBox.innerHTML='<p>Oooops .... something went wrong </p>'
                }
            })
        })
    }))

}

// CONTENT-RATING SYSTEM
// get the forms
const contentRateForm=document.querySelector('.content-rate-form')
const contentConfirmBox=document.getElementById('content-confirm-box')
//optimise the function to hover over the buttons and get that particular value
const handleButtonContentSelect =(size) =>{
    const contentChildren=contentRateForm.children
    for (let i =0; i < contentChildren.length; i++){
        if (i <= size){
            contentChildren[i].classList.add('content-checked')
        }
        else{
            contentChildren[i].classList.remove('content-checked')
        } 
    }
}

// function to change the background colour once someone hovers over a rating number
const handleContentSelect=(selection) =>{
    switch(selection){
        case 'content-first':{
            handleButtonContentSelect(1)
            return
        }
        case 'content-second':{
            handleButtonContentSelect(2)
            return
        }
        case 'content-third':{
            handleButtonContentSelect(3)
            return
        }
        case 'content-fourth':{
            handleButtonContentSelect(4)
            return
        }
        case 'content-fifth':{
            handleButtonContentSelect(5)
            return
        }
        case 'content-sixth':{
            handleButtonContentSelect(6)
            return
        }
        case 'content-seventh':{
            handleButtonContentSelect(7)
            return
        }
        case 'content-eighth':{
            handleButtonContentSelect(8)
            return
        }
        case 'content-ninth':{
            handleButtonContentSelect(9)
            return
        }
        case 'content-tenth':{
            handleButtonContentSelect(10)
            return
        }
    }
}

// change the values from string to numeric values
const getConNumericValue=(stringValue) =>{
    let numericConValue;
    if (stringValue === 'content-first'){
        numericConValue = 1
    }
    else if (stringValue === 'content-second'){
        numericConValue=2
    }
    else if (stringValue === 'content-third'){
        numericConValue=3
    }
    else if (stringValue === 'content-fourth'){
        numericConValue=4
    }
    else if (stringValue==='content-fifth'){
        numericConValue=5
    }
    else if (stringValue==='content-sixth'){
        numericConValue=6
    }
    else if (stringValue==='content-seventh'){
        numericConValue=7
    }
    else if (stringValue==='content-eighth'){
        numericConValue=8
    }
    else if (stringValue==='content-ninth'){
        numericConValue=9
    }
    else if (stringValue==='content-tenth'){
        numericConValue=10
    }
    else{
        numericConValue=0 
    } 
    return numericConValue  
}

if (contentFirst){
    const contentArr=[contentFirst, contentSecond, contentThird, contentFourth, contentFifth, contentSixth, contentSeventh, contentEighth, contentNinth, contentTenth]

    contentArr.forEach(item => item.addEventListener('mouseover', (event)=>{
        handleContentSelect(event.target.id)
    }))

    contentArr.forEach(item => item.addEventListener('click', (event)=>{
        const contentVal=event.target.id

        contentRateForm.addEventListener('submit', (event)=>{
            event.preventDefault()
            const id=event.target.id
            console.log(id)
            const valueContentNum=getConNumericValue(contentVal)

            contentConfirmBox.innerHTML =`<p>Content: ${valueContentNum}</p>`

            $.ajax({
                type:'POST',
                url:'/ratecontentproject/',
                data:{
                    'csrfmiddlewaretoken':csrf[0].value,
                    'el_id':id,
                    'contentVal':valueContentNum
                },
                success: function(response){
                    console.log(response)
                    contentConfirmBox.innerHTML=`<p>Content Rating: ${response.contentrate}</p>`
                },
                error: function(error){
                    console.log(error)
                    contentConfirmBox.innerHTML='<p>Oooops .... something went wrong </p>'
                }
            })
        })
    }))

}




