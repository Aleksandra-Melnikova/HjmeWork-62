import Photo from '../../src/assets/Photo.jpg';

const Home = () => {
  return (
    <div className='container'>
      <img className='img-thumbnail rounded float-start me-3 ' src={Photo} alt="Photo"/>
      <p className='text-start mt-3 fs-4'>
        Привет! Меня зовут Алeксандра и я мечтаю стать фронтенд-разработчиком!
        В данный момент я учусь в очень крутой школе Attractor School.
        Я прохожу программу Javascript (React+Node.js).
        Учиться в Attractor School, очень сложно, но я кайфую от процесса,
        потому что чувствую, что IT это та сфера,
        которую я давно искала и в которой у меня все обязательно сложится.</p>
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