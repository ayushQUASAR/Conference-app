
export default function Person({el}){
return (
<>
          <div className="profile">
            <div className="img">
              <a href={el.ProfileLink} rel="noopener noreferrer"style={{textDecoration:"none"}} target="_blank"> <img src={el.ImgLink} alt=""/></a>
            </div>
            <div className="content-p">
              <div className="sname"> <p>{el.Name}</p></div>
              <div className="post"><p>{el.Designation}</p></div>
              <div className="col-name"><p>{el.Institute}</p></div>
            </div>
          </div>
</>
);
}