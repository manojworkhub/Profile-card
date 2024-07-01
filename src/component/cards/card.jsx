// import logo from './logo.svg';
import "./card.css";
const usersdata = [
  {
    name: "John Doe",
    location: "New York",
    designation: "Software Engineer",
    skills: ["Java", "Python", "JavaScript", "SQL"],
    image: "https://i.ibb.co/kGjwP8G/1.jpg",
    online: true,
  },

  {
    name: "Alice Smith",
    location: "San Francisco",
    designation: "Data Scientist",
    skills: ["Python", "R", "Machine Learning", "Data Visualization"],
    image: "https://i.ibb.co/d45qZyD/2.jpg",
    online: false,
  },

  {
    name: "Michael Johnson",
    location: "London",
    designation: "UX Designer",
    skills: ["UI Design", "Prototyping", "User Research", "Adobe XD"],
    image: "https://i.ibb.co/rQ523Sp/3.jpg",
    online: true,
  },

  {
    name: "Emily Chen",
    location: "Shanghai",
    designation: "Product Manager",
    skills: [
      "Product Strategy",
      "Market Analysis",
      "Agile Methodology",
      "Stakeholder Management",
    ],
    image: "https://i.ibb.co/NsLdKR6/4.jpg",
    online: true,
  },

  {
    name: "David Lee",
    location: "Tokyo",
    designation: "Blockchain Developer",
    skills: [
      "Solidity",
      "Blockchain Architecture",
      "Smart Contracts",
      "DApp Development",
    ],
    image: "https://i.ibb.co/hRmJf80/pexels-soldiervip-1374510.jpg",
    online: false,
  },
];

function User(props) {
  return (
    <div id="s1">
      <div id="continer">
        <span className={props.online ? "pro online" : "pro offline"}>
          {props.online ? "online" : "offline"}
        </span>
        <img src={props.image} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.location}</h3>
        <p>{props.designation}</p>
        <div className="button">
          <button className="primary ">message</button>
          <button className="primary outline">following</button>
        </div>
        <div>
          <h6>skills</h6>
          <ul>
            {props.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
function Card() {
  return (
    <div>
      {usersdata.map((data, index) => (
        <User
          key={data.index}
          online={data.online}
          name={data.name}
          location={data.location}
          designation={data.designation}
          skills={data.skills}
          image={data.image}
        />
      ))}
    </div>

    // <User
    //   online={true}
    //   name={"sara"}
    //   location={"uk"}
    //   designation={"UI/UX developer"}
    //   skills={[
    //     "html",
    //     "css",
    //     "javascript",
    //     "reactjs",
    //     "nodejs",
    //     "expressjs",
    //     "mongodp",
    //     "mongoose",
    //   ]}
    //   image={"./public/img/1.jpg"}
    // />
  );
}

export default Card;
