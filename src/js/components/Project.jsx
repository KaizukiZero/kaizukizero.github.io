import React from 'react';
class OwnerProject extends React.Component {
        render() {
        return (
            <div className="row justify-content-center project-size">
                <div className="col-8">
                    <div className="text-header">
                        Project Name
                    </div>
                    <div className="text-content">
                        Project Detail
                    </div>
                    <div className="project-footer">
                        <span className="project-by">
                            Project By : KaizukiZero
                        </span>
                        <span className="date-project-public">
                            Date Public : Today
                        </span>
                    </div>

                </div>
                <div className="col-4"><img
                        src="https://blog.addthiscdn.com/wp-content/uploads/2018/05/11122803/3-Things-Great-Websites-Have-in-Common.png"
                        alt="" className="img-project" /></div>
            </div>
            
        );
    }
}


export default OwnerProject;