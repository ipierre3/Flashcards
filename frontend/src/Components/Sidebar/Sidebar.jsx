

const Sidebar = (props) => {
  
  console.log(props.collections)

  return ( 
    <div className="wrapper">
    <nav id="sidebar">
        <div className="sidebar-header">
            <h2>COLLECTIONS</h2>
        </div>
        <ul>
          <h1>FLUTTER</h1>
          <h1>CSS</h1>
          <h1>PANDAS</h1>
        </ul>
    </nav>

</div>
   );
}
 
export default Sidebar;