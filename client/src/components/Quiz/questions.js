const questions = [
  {
    key: "location",
    text: "Please enter your zip code.",
  },
  {
    key: "animal",
    text: "What type of pet are you looking to rescue?",
    answers: ['dog', 'cat', 'bird', 'reptile', 'horse', 'smallfurry', 'barnyard']
  },
  {
    key: "size",
    text: "What is the ideal size for your new pet?",
    answers: [
      ['S', 'small'],
      ['M', 'medium'],
      ['L', 'large'],
      ['XL', 'extra large']
    ]
  },
  {
    key: "sex",
    text: "What is the ideal sex of your new pet?",
    answers: [
      ['M', 'male'],
      ['F', 'female'],
    ]
  },
  {
    key: "age",
    text: "What is the ideal age for your new pet?",
    answers: ['Baby', 'Young', 'Adult', 'Senior']
  },
];

export default questions;
