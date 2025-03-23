import { useEffect, useState } from 'react';
import ProjectCard from './Project_Card';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';


function Projects_Info() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/nimra-amer/repos")
      .then((response) => response.json())
      .then((json) => {
        const required_projects = json.slice(1, 4).map((item) => ({
          id: item.id.toString(),
          name: item.name,
          description: item.description,
          image: item.owner.avatar_url,
          link: item.html_url
        }));
        setProject(required_projects);
      });
  }, []);
 
  //Draggable code : Logic taken from Google
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = [...project];
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);
    setProject(items);
  };

  return (
    <div>
      <h2>My Projects</h2>

      {project.length > 0 && (
        <DragDropContext onDragEnd={onDragEnd}>        {/* Code Taken from Google for Draggable Feature*/}
          <Droppable droppableId="projects">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ minHeight: "100px" }}
              >
                {project.map((info, index) => (
                  <Draggable key={info.id} draggableId={info.id} index={index}>      {/*Code Taken from Github*/}
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}           
                        {...provided.dragHandleProps}
                        style={{
                          padding: "10px",
                          margin: "10px 0",
                          border: "1px solid #ccc",
                          borderRadius: "10px",
                          background: "#f9f9f9",
                          ...provided.draggableProps.style,
                        }}
                      >
                        <ProjectCard
                          name={info.name}
                          image={info.image}
                          description={info.description}
                          link={info.link}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
}

export default Projects_Info;
