const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Why nobody loves me?', likesCount: 0 },
      { id: 2, message: 'Hi everyone!', likesCount: 10 },
      { id: 3, message: 'I am Elyor', likesCount: 12 },
      { id: 4, message: 'I want to earn $1000 per month', likesCount: 20 },
      { id: 5, message: 'How to improve logical thinking?', likesCount: 9 },
    ],
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Elyor' },
      { id: 2, name: 'Avazbek' },
      { id: 3, name: 'Dildora' },
      { id: 4, name: 'Bahrom' },
      { id: 5, name: 'Abbos' },
      { id: 6, name: 'Farhod' },
    ],
    messages: [
      { id: 1, message: 'HI' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'What about you?' },
      { id: 4, message: 'Yeah?' },
      { id: 5, message: 'Yo' },
    ],
  },

  sidebar: [
    {
      id: 1,
      name: 'Mike',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU',
    },
    {
      id: 2,
      name: 'John',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU',
    },
    {
      id: 3,
      name: 'Andy',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU',
    },
  ],
};

export default state;
