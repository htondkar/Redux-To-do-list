const test = [{
  title: 'sample task',
  id: '12dsfsf1s5df15sd1f',
  category: 'work',
  progress: 0,
  creationDate: new Date(),
},
{
  title: 'sample task 2',
  id: '212dsfsf1s5df15sd1f',
  category: 'home',
  progress: 10,
  creationDate: new Date(),
}];

export default function tasks(state = [], action) {

    switch (action.type) {
        case 'xxxx':


            break;
        default:
            return test;
    }
}
