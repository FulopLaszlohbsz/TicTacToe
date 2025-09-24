let headerContent = "Games";
let sideMenuContent = ``;
let sectionContent = `Select a Game!`;
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
        <section>${sectionContent}</section>
     </main>
    <footer><p>&copy2025 projektteam3<p></footer>`;
}
function TicTacToe() 
{
    headerContent = "TicTacToe";
    sectionContent = Games[0].content;
    sideMenuContent = Games[0].sideMenu;
    Start();
}
function ResetPage()
{
    sectionContent = `Select a Game!`;
    sideMenuContent = ``;
    headerContent = "Games";
    Start();
}