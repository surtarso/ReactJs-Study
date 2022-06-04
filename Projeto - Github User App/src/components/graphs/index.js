
import useGithub from "../../hooks/github-hooks";

const Graphs = () => {
    const { githubState } = useGithub();

    // const apiUrl = "https://github.com/surtarso/ReactJS-Projects/blob/main/Projeto%20-%20Github%20User%20App/public/api.html?"
    // const apiUrl = "file://home/tarso/Development/ReactJS-Projects/Projeto - Github User App/public/api.html"
    const apiUrl = 'http://localhost:3000/api.html';

    return (
        <iframe 
            title="Graphs"
            src={apiUrl + "?" + githubState.user.login}
            // scrolling="no"
            frameBorder="0"
            width={600}
            height={600}
            sandbox='allow-scripts allow-modal'
        />
    )
};

export default Graphs;