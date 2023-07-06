
export default function Person({el}){
return (
<>
          <div className="profile">
            <div className="img">
              <a href={el.ProfileLink} style={{textDecoration:"none"}} target="_blank"> <img src={el.ImgLink} alt=""/></a>
            </div>
            <div className="content-p">
              <div className="sname">{el.Name}</div>
              <div className="post">{el.Designation}</div>
              <div className="col-name">{el.Institute}</div>
            </div>
          </div>
</>
);
}