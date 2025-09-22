let headerContent = "Games";
let sideMenuContent = ``;
function Start() {
    document.body.innerHTML = `
    <header onClick="ResetPage()">${headerContent}</header>
    <nav id="nav-menu">
        <button onClick="TicTacToe()">TicTacToe</button>
        <button></button>
        <button></button>
    </nav>
    <main id="main">
        <aside id="side-menu"">
        <!-- <button onclick="Test()">Test</button> -->
        ${sideMenuContent}
        </aside>
        <section></section>
     </main>
    <footer><p>&copy2025 projektteam3<p></footer>`;
}
function TicTacToe() 
{
    headerContent = "TicTacToe";
    sideMenuContent = Games[0].sideMenu;
    Start();
}
function ResetPage()
{
    sideMenuContent = ``;
    headerContent = "Games";
    Start();
}