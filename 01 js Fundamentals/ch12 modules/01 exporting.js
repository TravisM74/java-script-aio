export const API = 'https://api.example.com';
export const colorThemeDrk = {
 backgroundColor: '#000',
 textColor: '#EEE',
 headerColor: '#FF0000',
 footerColor: '#FF0000'
}
export const colorThemeLght = {
 backgroundColor: '#fff',
 textColor: '#333',
 headerColor: '#FF0000',
 footerColor: '#FF0000'
}
export const labels = {
 english:{
 supportLink: 'Get Support',
 contactLink: 'Contact Us'
 }
};

// mulit export instead of individual exports  
export {API, colorThemeDrk, colorThemeLght, labels};


// renaming  on export

export {sum as addNumbers};
