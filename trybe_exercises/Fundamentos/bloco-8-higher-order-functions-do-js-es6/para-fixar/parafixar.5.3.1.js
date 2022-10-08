
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
const trappistEnterprise = {...user, ...jobInfos};
const every = ({name, age, nationality, profession, squad, squadInitials}) => {
    console.log(`Hi, my name is ${name} , I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials} - ${squad}`);  
}
 every(trappistEnterprise);