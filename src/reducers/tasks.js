const test = [{
  title: 'sample task',
  id: '12dsfsf1s5df15sd1f',
  category: 'work',
  progress: 0,
  creationDate: new Date(),
},
{
  title: 'sample task 2',
  id: '212dsfsf1s5dfsdsfddf15sd1f',
  category: 'home',
  progress: 100,
  creationDate: new Date(),
},
{
  title: 'sample task 4',
  id: '212dsfzvbzvcbsfds1s5df15sd1f',
  category: 'home',
  progress: 60,
  creationDate: new Date(),
},
{
  title: 'sample task 5',
  id: '212dsfsfd,kj,jk,s1s5df15sd1f',
  category: 'home',
  progress: 60,
  creationDate: new Date(),
},
{
  title: 'sample task 6',
  id: '212dsfsfdsytrtye1s5df15sd1f',
  category: 'home',
  progress: 60,
  creationDate: new Date(),
},
{
  title: 'sample task 7',
  id: '212dsfsfdsvbcnc1s5df15sd1f',
  category: 'home',
  progress: 60,
  creationDate: new Date(),
}
];

export default function tasks(state = [], action) {

    switch (action.type) {
        case 'xxxx':


            break;
        default:
            return test;
    }
}
