const SectionTitle = (props) => {
    let { title, subTitle } = props;
    title = title.split(" ");

    return (
        <div className="section-title">
            <h2>
                {title[0]} <span>{title[1]}</span>
            </h2>
            <p>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;
