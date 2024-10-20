import Photo from '../../src/assets/Photo.jpg';

const Home = () => {
  return (
    <div className='container my-5 clearfix'>
      <img className='img-thumbnail rounded float-start me-3' src={Photo} alt="Photo"/>
      <p className='text-start mt-3 fs-4'>
        Hi. My name is Alexandra and my dream is to become a frontend developer!
        I'm currently studying at a very cool school called Attractor School.
        I'm in the Javascript program (React+Node.js).
        Studying at Attractor School is very hard, but I'm enjoying the process,
        because I feel like IT is the kind of field
        that I've been looking for for a long time and that I'm going to do well in.</p>
      <p className='text-start fs-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.</p>
      <p className='text-start fs-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.</p>
      <p className='text-start fs-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.</p>
</div>
)
  ;
};

export default Home;