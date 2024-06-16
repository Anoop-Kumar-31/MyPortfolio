import projects from '../components/Pingo'
export default function Projects() {
  	return (
    	<div className="skillsection" id='projectSection'>
			<b style={{ fontSize: "10vh"}}>Projects</b>
			<hr style={{marginTop: '10px'}}/><br />
			<parent>
				{projects.map((instance, index) =>{
						return(
							<child>
								<div><img src={instance.image} alt="" /></div>
								<info>
									<icons>
										{instance.icons.map((icon, index) => <img src={icon} height="40px" alt={`image-${index}`} />)}
									</icons>
									<h1>{instance.name}</h1>
									<p>{instance.des}</p>
								<button><a href={instance.link} target='_blank'>View Project</a></button>
								</info>
							</child>
						)
				})
				}
			</parent>
    	</div>
  	);
}
