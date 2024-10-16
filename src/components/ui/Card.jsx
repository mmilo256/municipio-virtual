const Card = ({ icon, title, desc, href }) => {
    return (
        <a href={href} className="shadow hover:-translate-y-1 shadow-slate-600 group p-5 text-center bg-white hover:text-white transition-all duration-300 hover:bg-secondary group">
            <div className="flex justify-center transition-all duration-300 group-hover:text-white text-slate-500">{icon}</div>
            <p className="group-hover:text-white transition-all duration-300 text-primary text-xl font-semibold mb-1 mt-1">{title}</p>
            <p className="group-hover:text-white transition-all duration-300 text-slate-600 mb-3">{desc}</p>
            {/* <Button text="Acceder" /> */}
        </a>
    );
};

export default Card;
