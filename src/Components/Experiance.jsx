import React from 'react';

const skills = [
  {
    id: 1,
    logo: 'public/html.png',
    name: 'HTML',
  },

  {
    id: 2,
    logo: 'public/css.png',
    name: 'CSS',
  },

  {
    id: 3,
    logo: 'public/js.png',
    name: 'JavaScript',
  },

  {
    id: 4,
    logo: 'public/react.png',
    name: 'React',
  },

  {
    id: 5,
    logo: 'public/nodejs.png',
    name: 'Node.js',
  },

  {
    id: 6,
    logo: 'public/mongodb.png',
    name: 'MongoDB',
  },
];

const Skills = () => {
  return (
    <div name="Skills" className="max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <span className="">Here are some technologies I'm interested in learning:</span>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map(({ id, logo, name }) => (
            <div key={id} className="flex flex-col items-center justify-center bg-white border-[2px] rounded-full border-[2px] cursor-pointer hover:scale-110 duration-200 md:w-[200px] md:h-[200px] mt-3">
              <img src={logo} className="w-[110px] rounded-full" alt={name} />
              <div className="mb-4 md:mt-4">
                <h2 className="">{name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
