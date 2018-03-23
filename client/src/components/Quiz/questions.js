const questions = [
  {
    key: "location",
    text: "Where would you like to search for your rescue?",
  },
  {
    key: "animal",
    text: "What level of care are you able to provide to your rescue?",
    answers: [
      ['dog', 'Go for long walks around the block'],
      ['cat', 'Cuddle at home on the couch'],
      ['bird', 'Put newspaper down in a cage'],
      ['reptile', 'Buy flies to feed my rescue'],
      ['horse', 'Provide extensive grooming and maintenance'],
      ['smallfurry', 'Buy a small crate that has a wheel to play on'],
      ['barnyard', 'Lots of feeding and cleanup']
    ]
  },
  {
    key: "size",
    text: "Relative to your height, where would you like to your rescue to fall?",
    answers: [
      ['S', 'Up to my ankle'],
      ['M', 'Up to my knee'],
      ['L', 'Up to my waist'],
      ['XL', 'Up to my shoulders']
    ]
  },
  {
    key: "age",
    text: "What level of energy are you looking for in your rescue?",
    answers: [
      ['Baby', 'Loads of energy that never ends'],
      ['Young', 'Growing out of it, but still ready to do a lot'],
      ['Adult', 'Settled down a bit'],
      ['Senior', 'Set in their way and super mellow']
    ]
  },
];

export default questions;
