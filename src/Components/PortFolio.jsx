import React from 'react';

const cardItem = [
  {
    id: 1,
    logo: 'public/js.png',
    name: 'Project 1',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    videoLink: 'https://example.com/project1/video',
    sourceCodeLink: 'https://github.com/example/project1',
  },
  {
    id: 2,
    logo: 'public/react.png',
    name: 'Project 2',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    videoLink: 'https://example.com/project2/video',
    sourceCodeLink: 'https://github.com/example/project2',
  },
  {
    id: 3,
    logo: 'public/nodejs.png',
    name: 'Project 3',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    videoLink: 'https://example.com/project3/video',
    sourceCodeLink: 'https://github.com/example/project3',
  },
  {
    id: 4,
    logo: 'public/mongodb.png',
    name: 'Project 4',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    videoLink: 'https://example.com/project4/video',
    sourceCodeLink: 'https://github.com/example/project4',
  },
  {
    id: 5,
    logo: 'public/java.jpg',
    name: 'Project 5',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    videoLink: 'https://example.com/project5/video',
    sourceCodeLink: 'https://github.com/example/project5',
  },
  {
    id: 6,
    logo: 'public/python.jpg',
    name: 'Project 6',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    videoLink: 'https://example.com/project5/video',
    sourceCodeLink: 'https://github.com/example/project5',
  },
];

const Portfolio = () => {
  return (
    <div name="Portfolio" className="max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cardItem.map(({ id, logo, name, description, videoLink, sourceCodeLink }) => (
            <div key={id} className="my-5 bg-white border-[2px] rounded-lg overflow-hidden shadow-md cursor-pointer  hover:scale-110 duration-200">
              <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px] ml-1" alt={name} />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-700">{description}</p>
              </div>
              <div className="p-4 flex justify-end">
                <a href={videoLink} target="_blank" rel="noopener noreferrer" className="mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Video
                </a>
                <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
