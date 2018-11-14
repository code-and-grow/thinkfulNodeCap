// starting with lists predefined
const courseList = [
  {
    "id": "course-Main Dishes",
    "name": "Main Dishes",
    "type": "course",
    "description": "Main Dishes",
    "searchValue": "course^course-Main Dishes",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "course-Desserts",
    "name": "Desserts",
    "type": "course",
    "description": "Desserts",
    "searchValue": "course^course-Desserts",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "course-Side Dishes",
    "name": "Side Dishes",
    "type": "course",
    "description": "Side Dishes",
    "searchValue": "course^course-Side Dishes",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "course-Appetizers",
    "name": "Appetizers",
    "type": "course",
    "description": "Appetizers",
    "searchValue": "course^course-Appetizers",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "course-Salads",
    "name": "Salads",
    "type": "course",
    "description": "Salads",
    "searchValue": "course^course-Salads",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "course-Breakfast and Brunch",
    "name": "Breakfast and Brunch",
    "type": "course",
    "description": "Breakfast and Brunch",
    "searchValue": "course^course-Breakfast and Brunch",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "course-Breads",
    "name": "Breads",
    "type": "course",
    "description": "Breads",
    "searchValue": "course^course-Breads",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "course-Soups",
    "name": "Soups",
    "type": "course",
    "description": "Soups",
    "searchValue": "course^course-Soups",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "course-Beverages",
    "name": "Beverages",
    "type": "course",
    "description": "Beverages",
    "searchValue": "course^course-Beverages",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "course-Condiments and Sauces",
    "name": "Condiments and Sauces",
    "type": "course",
    "description": "Condiments and Sauces",
    "searchValue": "course^course-Condiments and Sauces",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "course-Cocktails",
    "name": "Cocktails",
    "type": "course",
    "description": "Cocktails",
    "searchValue": "course^course-Cocktails",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "course-Snacks",
    "name": "Snacks",
    "type": "course",
    "description": "Snacks",
    "searchValue": "course^course-Snacks",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "course-Lunch",
    "name": "Lunch",
    "type": "course",
    "description": "Lunch",
    "searchValue": "course^course-Lunch",
    "localesAvailableIn": [
      "en-US"
    ]
  }
];
const allergyList = [
  {
    "id": "393",
    "shortDescription": "Gluten-Free",
    "longDescription": "Gluten-Free",
    "searchValue": "393^Gluten-Free",
    "type": "allergy",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "394",
    "shortDescription": "Peanut-Free",
    "longDescription": "Peanut-Free",
    "searchValue": "394^Peanut-Free",
    "type": "allergy",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "398",
    "shortDescription": "Seafood-Free",
    "longDescription": "Seafood-Free",
    "searchValue": "398^Seafood-Free",
    "type": "allergy",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "399",
    "shortDescription": "Sesame-Free",
    "longDescription": "Sesame-Free",
    "searchValue": "399^Sesame-Free",
    "type": "allergy",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "400",
    "shortDescription": "Soy-Free",
    "longDescription": "Soy-Free",
    "searchValue": "400^Soy-Free",
    "type": "allergy",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "396",
    "shortDescription": "Dairy-Free",
    "longDescription": "Dairy-Free",
    "searchValue": "396^Dairy-Free",
    "type": "allergy",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "397",
    "shortDescription": "Egg-Free",
    "longDescription": "Egg-Free",
    "searchValue": "397^Egg-Free",
    "type": "allergy",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "401",
    "shortDescription": "Sulfite-Free",
    "longDescription": "Sulfite-Free",
    "searchValue": "401^Sulfite-Free",
    "type": "allergy",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "395",
    "shortDescription": "Tree Nut-Free",
    "longDescription": "Tree Nut-Free",
    "searchValue": "395^Tree Nut-Free",
    "type": "allergy",
    "localesAvailableIn": [
      "en-US"
    ]
  },
  {
    "id": "392",
    "shortDescription": "Wheat-Free",
    "longDescription": "Wheat-Free",
    "searchValue": "392^Wheat-Free",
    "type": "allergy",
    "localesAvailableIn": [
      "en-US"
    ]
  }
];
let courseVal = [];
let allergyVal = [];
let allowedIng = [];
let excludedIng = [];
let recipes = [];
// save token and redirect on successful login
function handleLogin(data) {
  localStorage.setItem('token', data.authToken);
  showSearch();
}

// login page error reporting
function handleError(error) {
  const message401 = error.statusText;
  const response = error.responseJSON;
  
  if (error.status === 401 ) {
    $('.js-login-err').html(`<h4>${message401}. Please check entered email and password.</h4>`)
                      .attr('aria-hidden', 'false');
  } else if (response.location === 'username') {
    $('.js-create-account-err').html(`<h4>${response.message}. If you have an account, you can sign in using the 'Log in' form.</h4>`)
                               .attr('aria-hidden', 'false');
  } else if (response.location === 'password') {
    $('.js-create-account-err').html(`<h4>Please check entered ${response.location}. It ${response.message.toLowerCase()}.</h4>`)
                               .attr('aria-hidden', 'false');
  }
}
function loginCall(username, password) {
  $.ajax({
    url: '/api/auth/login',
    method: 'POST',
    data: JSON.stringify({ 
      username: username,
      password: password
    }),
    contentType: 'application/json',
    dataType: 'json',
    success: handleLogin,
    error: handleError
  });
}
// log in user
function loginSubmit() {
  const loginForm = $('#js-login-form');
  // submit credentials
  $(loginForm).submit(function(event) {
    event.preventDefault();
    $('.js-login-err').empty()
                      .attr('aria-hidden', 'true');
    $('.js-create-account-err').empty()
                               .attr('aria-hidden', 'true');
    const username = $('#js-username').val();
    const password = $('#js-user-pw').val();
    // send user credentials
    loginCall(username, password);
  });
}
// create new user
function createAccountSubmit() {
  const createAccountForm = $('#js-create-account-form');
  // submit new user credentials
  $(createAccountForm).submit(function(event) {
    event.preventDefault();
    $('.js-login-err').empty()
                      .attr('aria-hidden', 'true');
    $('.js-create-account-err').empty()
                               .attr('aria-hidden', 'true');
    const email = $('#js-new-user').val();
    const firstName = $('#js-firstname').val();
    const lastName = $('#js-lastname').val();
    const password = $('#js-new-pw').val();
    const confirmedPassword = $('#js-confirm-pw').val();
    // if password fields match
    if (password === confirmedPassword) {
      // save new user data to db
      $.ajax({
        url: '/api/users',
        method: 'POST',
        data: JSON.stringify({ 
          username: email,
          password: password,
          firstName: firstName,
          lastName: lastName
        }),
        contentType: 'application/json',
        dataType: 'json',
        success: function(response) {
          loginCall(email, password);
        },
        error: (error) => console.log(error)
      });
    // otherwise alert user that passwords don't match
    } else {
      $('.js-create-account-err').html(`<h4>Entered passwords do not match.</h4>`)
                                 .attr('aria-hidden', 'false');
    }
  });
}

const searchFormHtml = `<form action="" class="js-search-form search-form">
                          <fieldset>
                            <h2 class="js-courses-btn">Choose course</h2>
                            <div id="courses" class="js-courses"></div>
                            <h2 class="js-allergies-btn">Choose allergies</h2>
                            <div id="allergies" class="js-allergies"></div>
                            <h2 class="">Enter ingredients to include</h2>
                            <div class="included-tags-input" data-name="included-tags-input"></div>
                            <h2 class="">Enter ingredients to exclude</h2>
                            <div class="excluded-tags-input" data-name="excluded-tags-input"></div>
                            <input type="submit" value="SEARCH">
                          </fieldset>
                        </form>`;

const showListsHtml = function(response) {
  return response.map( (list, index) => `<div class="saved-lists-item" id="${list._id}">
                                          <h3 class="list-item-h3">${index + 1}. ${list.title}</h3>
                                          <span>Yummly rating: ${list.rating} </span>
                                          <span>Comments: ${list.comments.length} </span>
                                          <a><span>Share </span></a>
                                          <a><span>Delete</span></a>
                                        </div>`).join('');
};

const showListHtml = function(item) {
  return  `<div class="" id="${item._id}">
            <div style="text-align:center;">
              <span>Yummly rating: ${item.rating} </span>
              <span>Comments: ${item.comments} </span>
              <a><span>Share </span></a>
              <a><span>Delete</span></a>
            </div>
            <div style="text-align:center;padding:10px;">
              <img src="${item.image}" alt="${item.title}">
            </div>
            <ul>${item.ingredients.map( ingr => {return '<li>' + ingr + '</li>'} ).join('')}</ul>
          </div>`;
  };
const showProfileHtml = `Ī'm waiting for content...`;
// save user page history and set hash
let savedHashes = [];
function updateHistory(currHash) {
  savedHashes.push(window.location.hash.split(1));
  window.location.hash = currHash;
}
// render page function
function renderPage(response, html, hashStr) {
  updateHistory(hashStr);
  $('title')
    .empty()
    .append(response.titleContent);
  $('header')
    .empty()
    .append(`<div id="top-bar">
              <span id="header-name">
                <img src="images/user-icon.png" alt="" width="18" aria-hidden="true">
                Hola, ${response.firstName}!
              </span>
              <nav>
                <ul class="top-nav">
                  <a href="#search"><li>Search</li></a>
                  <a href="#lists"><li>Saved lists</li></a>
                  <a href="#profile"><li>User profile</li></a>
                  <a onclick='logOut()'><li>Log out</li></a>
                </ul>
              </nav>
            </div>
            <h1>${response.titleContent}</h1>`);
  $('#main')
    .empty()
    .append(html);
}
// show search page
function showSearch() {
  $.ajax({
    url: '/api/users/search/',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`
    },
    contentType: 'application/json',
    dataType: 'json',
    success: function(response) {
      courseVal = [];
      allergyVal = [];
      allowedIng = [];
      excludedIng = [];
      recipes = [];
      renderPage(response, searchFormHtml, 'search');
      $('.js-courses').html(`${renderChkboxInputs(courseList)}`);
      $('.js-allergies').html(`${renderChkboxInputs(allergyList)}`);
      tagsFromInput(allowedIng, 'included-tags-input');
      tagsFromInput(excludedIng, 'excluded-tags-input');
      searchSubmit();
    },
    error: function(error) { console.log(error) }
  });
}
// profile page rendering
function showProfile() {
  $.ajax({
    url: '/api/users/profile/',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`
    },
    contentType: 'application/json',
    dataType: 'json',
    success: function(response) {
      renderPage(response, showProfileHtml, 'profile');
    },
    error: function(error) { console.log(error) }
  });
}

function showLists() {
  $.ajax({
    url: '/api/users/lists/',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`
    },
    contentType: 'application/json',
    dataType: 'json',
    data: {},
    success: function(response) {
      //console.log(response.lists);
      renderPage(response, showListsHtml(response.lists), 'lists');
      showList();
    },
    error: function(error) { console.log(error) }
  });
}

function showList() { 
  const listItem = $('#main').find('.saved-lists-item');
  listItem.on('click', function(e){
    let itemId = $(e.currentTarget).attr('id');
    $.ajax({
      url: '/api/users/lists/',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      },
      data: {},
      contentType: 'application/json',
      success: (response) => {
        //console.log(response.lists);
        let listItem = response.lists.filter( function(list) {
            return list._id === itemId;
          });
        //console.log(listItem[0]);
        renderPage(response, showListHtml(listItem[0]), listItem[0]._id);
        $('title')
          .empty()
          .append(listItem[0].title);
        $('header h1')
          .empty()
          .append(listItem[0].title);
        listItem = undefined;
      },
      error: (error) => console.log(error)
    });
  });
}
// log out
function logOut() {
  savedHashes = [];
  localStorage.removeItem('token');
  localStorage.removeItem('hash');
  window.location.replace('/');
}
// render page when user clicks refresh button
window.onload = function(e) {
  localStorage.setItem('hash', window.location.hash.slice(1));
  $.ajax({
    url: '/api/users/' + localStorage.hash,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`
    },
    contentType: 'application/json',
    dataType: 'json',
    success: function() {
      switch (localStorage.hash) {
        case 'search':
          showSearch();
          break;
        case 'profile':
          showProfile();
          break;
        case 'lists':
          showLists();
          break;
        // case '':
        //   showProfile();
        //   break;
        // case localStorage.hash:
        //   showList();
        //   break;
      }
    },
    error: handleError
  });
}
function renderPageFromHash() {
  localStorage.setItem('hash', window.location.hash.slice(1));
  switch (localStorage.hash) {
    case 'search':
      showSearch();
      break;
    case 'profile':
      showProfile();
      break;
    case 'lists':
      showLists();
      break;
    case localStorage.hash:
      showList();
      break;
  }
}
// render page when user clicks page links or back button
window.onhashchange = function() {
  if(localStorage.token) {
    renderPageFromHash();
  } else {
    logOut();
  }
}
// Yummly API integration 

// render checkboxes
function renderChkboxInputs(inputArr) {
	let result = '';
  for (let i = 0; i < inputArr.length; i++) {
  	if (inputArr[i].type === 'course'){
      result += `<div class="checkbox">
                  <label>
                    <input type="checkbox" value="${inputArr[i].searchValue}" name="${inputArr[i].description}" class="${inputArr[i].type}">
                    ${inputArr[i].description}
                  </label>
                </div>`;
  	} else if (inputArr[i].type === 'allergy') {
      result += `<div class="checkbox">
                  <label>
                    <input type="checkbox" value="${inputArr[i].searchValue}" name="${inputArr[i].shortDescription}" class="${inputArr[i].type}">
                    ${inputArr[i].shortDescription}
                  </label>
                </div>`;
    }
  }
  return result;
}

// Get checked values 
function getCheckedValues (targetClass, isAllergy) {
  // Declare variables to store checked item data
  let targetChecked = targetClass + ':checked';
  //let checkedNamesArray = [];
  let checkedArray = [];
  // Look for checked values
  function lookForCheckedValues() {
  // Loop through checked items and add them to array
    $(targetChecked).each(function() {
      checkedArray.push($(this).val());
    });
    checkedValues = checkedArray;
    if (isAllergy) {
      allergyVal = checkedValues;
    } else {
      courseVal = checkedValues;
    }
  }
  lookForCheckedValues();
}
// get tags from inputs
function tagsFromInput(tags, input) {
  [].forEach.call(document.getElementsByClassName(input), function (el) {
    let hiddenInput = document.createElement('input'),
        mainInput = document.createElement('input');

    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', el.getAttribute('data-name'));

    mainInput.setAttribute('type', 'text');
    mainInput.classList.add('main-input');
    mainInput.addEventListener('input', function () {
      let enteredTags = mainInput.value.split(',');
      if (enteredTags.length > 1) {
        enteredTags.forEach(function (t) {
            let filteredTag = filterTag(t);
            if (filteredTag.length > 0)
                addTag(filteredTag);
        });
        mainInput.value = '';
        return tags;
      }
    });

    // Enable user to enter tags with Comma or Enter keys
    mainInput.addEventListener('keydown', function (e) {
      let keyCode = e.which || e.keyCode;
      if (keyCode === 13 || keyCode === 188) {
      	e.preventDefault();
      	userEntered();
      } 
    });

    function userEntered() {
      let emptyRegExp = /^ +$/;
      let enteredTag = mainInput.value;

      if (emptyRegExp.test(enteredTag)) {
        mainInput.value = '';
      } else if ( enteredTag.length > 0 ) {
        addTag(enteredTag);
        mainInput.value = '';
        return tags;
      }

    }
    mainInput.addEventListener('keydown', function (e) {
      let keyCode = e.which || e.keyCode;
      if (keyCode === 8 && mainInput.value.length === 0 && tags.length > 0) {
          removeTag(tags.length - 1);
      }
    });

    el.appendChild(mainInput);
    el.appendChild(hiddenInput);

    function addTag (text) {
      let tag = {
          text: text,
          element: document.createElement('span'),
      };

      tag.element.classList.add('tag');
      tag.element.textContent = tag.text;

      let closeBtn = document.createElement('span');
      closeBtn.classList.add('close');
      closeBtn.addEventListener('click', function () {
          removeTag(tags.indexOf(tag));
      });
      tag.element.appendChild(closeBtn);

      tags.push(tag);

      el.insertBefore(tag.element, mainInput);

      refreshTags();
    }

    function removeTag (index) {
      let tag = tags[index];
      tags.splice(index, 1);
      el.removeChild(tag.element);
      refreshTags();
    }

    function refreshTags () {
      let tagsList = [];
      tags.forEach(function (t) {
          tagsList.push(t.text);
      });
      hiddenInput.value = tagsList.join(',');
    }

    function filterTag (tag) {
      return tag.replace(/[^\w -]/g, '').trim().replace(/\W+/g, '+');
    }
  });
}

const APP_ID = '0163f367';
const APP_KEY = 'fe0abbd328e4ac7137fab9e9459fb9df';

// Search recipes API call 
function searchAPI(courseVal, allergyVal, allowedIng, excludedIng) {
  // Set up API call settings
  recipes = [];
  let queryTerms = [ courseVal, allergyVal, allowedIng, excludedIng ];
  localStorage.setItem('queryTerms', queryTerms);
  queryTerms = [];
  const settings = {
    url: 'https://api.yummly.com/v1/api/recipes?_app_id=' + APP_ID + '&_app_key=' + APP_KEY,
    data: {
      q: '',
    	allowedCourse: courseVal,
    	allowedIngredient: allowedIng,
    	excludedIngredient: excludedIng,
      allowedAllergy: allergyVal,
      maxResult: 15
    },
    dataType: 'jsonp',
    type: 'GET',
    success: displayResults 
  };
  $.ajax(settings);
}
// Get recipe data from API 
function getRecipeData(recipeId, callback) {
	// Set up recipe API call settings
  const settings = {
    url: 'https://api.yummly.com/v1/api/recipe/' + recipeId + '?_app_id=' + APP_ID + '&_app_key=' + APP_KEY,
    recipe: {},
    dataType: 'jsonp',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}

// Add recipe data to array 
function saveRecipe(recipeData) {
  recipes.push({recipeData});
}
// Create result item
function renderResult(result) {
  // Save recipe results to array
  getRecipeData(result.id, saveRecipe);
  // Convert cooking time from seconds to hours and minutes
  let h = Math.floor(result.totalTimeInSeconds / 3600);
  let m = Math.floor(result.totalTimeInSeconds % 3600 / 60);
  let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours ") : "";
  let mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes") : "";
  let cookingTime =  hDisplay + mDisplay; 
  // Append recipe to DOM
  $('#js-results').append(`<a class="js-result clearfix" id="${result.id}">
                            <div>
                              <img class="card-image" src="${result.imageUrlsBySize[90]}" alt="Loading recipe image animation"  aria-hidden="true">
                              <h3>${result.recipeName}</h3>
                              <div class="result-info">
                                <p class="js-rating-container">${starRating(result.rating)}</p>
                                <p class="clock">${cookingTime}</p>
                                <div class="clearfix">
                                  <h4 class="ingredients">Ingredients:</h4>
                                  <ul class="ingredients-list">${ingredientsList(result.ingredients)}</ul>
                                </div>
                              </div>
                            </div>
                          </a>`);
}

// Add stars to rating display
function starRating(ratingValue) {
  let stars = '';
  for (let i = 0; i < ratingValue; i++) {
    stars += '<img class="star" src="images/star.png" alt="" aria-hidden="true">';
  }
  return stars;
}
// Return ingredients list items
function ingredientsList(ingredientArray) {
  let resultIngList = '';
  for (let i = 0; i < ingredientArray.length; i++) {
    resultIngList += '<li class="ingredients-item">';
    resultIngList += ingredientArray[i];
    resultIngList += '</li>';
  }
  return resultIngList;
}

// Display the results to user 
function displayResults(data) {
  window.location.hash = 'search-results';
  $('title')
    .empty()
    .append('Search results');
  $('header h1')
    .empty()
    .append(`Search results`);
  $('main')
    .empty()
    .append(`<div id="js-results"></div>`);
  // Do we have results?
  if (data.matches.length > 0) {
    // Loop through the results and render them 
    data.matches.map( (item, index) => renderResult(item) );
    $('main').append(`<div>
                              <h4>
                                <a href="#search">Start a new search</a>
                              </h4>
                            </div>`);
    // Add better resolution images from recipes array
    // setTimeout(function() {
    //   for (let i = 0; i < recipes.length; i++) {
    //     $('#js-results').find(`#${recipes[i].recipeData.id} img.card-image`)
    //     .attr('src', recipes[i].recipeData.images[0].hostedLargeUrl)
    //     .attr('alt', recipes[i].recipeData.name);
    //   }
    // }, 2200);
    // Open recipe in a lightbox after user click
    //showRecipeToUser();
    showRecipeToUser();
  // No results from API
  } else {
    $('main').append(`<div class="back-link clearfix">
                                <img class="card-image" src="" alt="Sad emoticon"  aria-hidden="true">
                                <h3>No results found.</h3>
                                <h4>
                                  <a href="#search">Start a new search</a>
                                </h4>
                              </div>`);
  }
}

// Display the recipe user selects 
function showRecipeToUser() {
  $('.js-result').on('click', function(event) {
    event.preventDefault();
    // Store the clicked recipe data
    const recipeClicked = recipes.find(recipe => recipe.recipeData.id === this.id);
    const recipeDetails = {
      name: recipeClicked.recipeData.name,
      image: recipeClicked.recipeData.images[0].hostedLargeUrl,
      course: recipeClicked.recipeData.attributes.course,
      rating: recipeClicked.recipeData.rating,
      servings: recipeClicked.recipeData.yield,
      totalTime: recipeClicked.recipeData.totalTime,
      ingredients: recipeClicked.recipeData.ingredientLines,
      sourceName: recipeClicked.recipeData.source.sourceDisplayName,
      sourceUrl: recipeClicked.recipeData.source.sourceRecipeUrl,
      yummlyLogo: recipeClicked.recipeData.attribution.logo,
      yummlyUrl: recipeClicked.recipeData.attribution.url
    }
    // Does the result have courses defined?
    function checkCourse() {
      if (recipeDetails.course) {
        recipeDetailsData = recipeDetails.course.join(', ');
        return recipeDetailsData;
      } else {
        return '-';
      }
    }
    // Does the result have yield defined?
    function checkYield() {
      if (recipeDetails.servings) {
        return recipeDetails.servings;
      } else {
        return '-';
      }
    }
    function saveToLists() { 
      const saveListBtn = $('#lightbox-content').find('#js-save-list');
      saveListBtn.on('click', function(e){
        $.ajax({
          url: '/api/users/lists',
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.token}`,
          },
          data: JSON.stringify({ 
            title: recipeDetails.name,
            ingredients: recipeDetails.ingredients,
            rating: recipeDetails.rating,
            yield: recipeDetails.yield,
            image: recipeDetails.image,
            comments: []
          }),
          contentType: 'application/json',
          dataType: 'json',
          success: () => console.log('List added'),
          error: (error) => console.log(error)
        });
      });
    }
    
    // Lightbox recipe details html
    const contentHtml = `<p id="closeLightbox">X</p>
                          <img src="${recipeDetails.image}" alt="${recipeDetails.name}"  aria-hidden="true">
                          <h2>${recipeDetails.name}</h2>
                          <p class="rating">${starRating(recipeDetails.rating)}<span>${recipeDetails.rating} star rating</span></p>
                          <p class="clock">${recipeDetails.totalTime}</p>
                          <p class="courses"> ${checkCourse()}</p>
                          <p class="yield">${checkYield()}</p>
                          <p class="ingredients">Ingredients:</p>
                          <ul>
                            ${ingredientsList(recipeDetails.ingredients)}
                          </ul>
                          <p class="source">
                            For detailed instructions visit 
                            <a href="${recipeDetails.sourceUrl}" target="_blank" aria-label="For detailed instructions visit ${recipeDetails.sourceName}.">
                              ${recipeDetails.sourceName}
                            </a>.
                          </p>
                          <p>
                            <button id="js-save-list">Save to my lists</button>
                            <div class="yummly-ref">
                              <a href="${recipeDetails.yummlyUrl}" target="_blank" aria-label="Link to selected recipe Yummly page">
                              <img id="yummly-logo" src="${recipeDetails.yummlyLogo}" alt="Link to selected recipe Yummly page">
                              <br>POWERED RECIPE
                              </a>
                            </div>
                            <div class="fb-share-button" data-href="${recipeDetails.yummlyUrl}" data-layout="button" data-size="large" data-mobile-iframe="true">
                              <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=${recipeDetails.yummlyUrl}&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
                                <img src="images/flogo-RGB-HEX-Blk-58.svg" alt="Share on facebook">
                              </a>
                            </div>
                          </p>`;
    // If lightbox exists
    if ($('#lightbox').length > 0) { 
      $('#lightbox-content').html(contentHtml);
      saveToLists();
      // Show lightbox window 
      $('#lightbox').show();
      // If lightbox does not exist
    } else { 
      //create HTML markup for lightbox window
      const lightbox = 
      `<div id="lightbox">
        <div id="lightbox-content">${contentHtml}</div>	
      </div>`;
      //insert lightbox HTML into page
      $('body').append(lightbox);
      saveToLists();
    }
    // Click anywhere on the page to get rid of lightbox window
    $('#closeLightbox').on('click', function() {
      $('#lightbox-content').empty();
      $('#lightbox').hide();
    });
  });


}

// search form submit event listener
function searchSubmit() {
  $('.js-search-form').on('submit', function(event) {
    event.preventDefault();
    getCheckedValues('.course', false);
    getCheckedValues('.allergy', true);
    allowedIng = allowedIng.map( item => item.text.replace(' ', '+'));
    excludedIng = excludedIng.map( item => item.text.replace(' ', '+'));
    searchAPI(courseVal, allergyVal, allowedIng, excludedIng);
  });
}

function initClient() {
  if(!localStorage.token) {
    $('title').append('Sign in or sign up!');
    $('#header-container header').append('<h1>Sign in or sign up!</h1>');
    $('#main').append(`<section>
                        <h2>Sign in</h2>
                        <span class="js-login-err err-message" aria-hidden="true" aria-live="assertive"></span>
                        <form action="" id="js-login-form" class="login-form">
                          <input type="text" name="username" id="js-username" aria-label="Email address" placeholder="Email address" required>
                          <input type="password" id="js-user-pw" aria-label="Password" placeholder="Password" required>
                          <input type="submit" value="log in" id="js-login-submit" aria-label="Log in" onclick="loginSubmit()">
                        </form>
                      </section>
                      <section>
                        <h2>Create new account</h2>
                        <span class="js-create-account-err err-message" aria-hidden="true" aria-live="assertive"></span>
                        <form action="" id="js-create-account-form" class="create-account-form">
                          <input type="text" name="firstname" id="js-firstname" aria-label="First name" placeholder="First name">
                          <input type="text" name="lastname" id="js-lastname" aria-label="Last name" placeholder="Last name">
                          <input type="email" name="email" id="js-new-user" aria-label="Your email address" placeholder="Your email address" required>
                          <input type="password" id="js-new-pw" aria-label="Password" placeholder="Password" required>
                          <input type="password" id="js-confirm-pw" aria-label="Re-enter password" placeholder="Re-enter password" required>
                          <input type="submit" value="Create account" id="js-create-account-submit" aria-label="Create account" onclick="createAccountSubmit()">
                        </form>
                      </section>`);
  }
}

$(initClient);