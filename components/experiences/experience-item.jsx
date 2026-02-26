import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
    return (
        <div className="group flex flex-row mb-4 pb-2 transition-all">
            {/* <div className="basis-1/4 mr-2">
                <Image src={props.logo} alt="Company Logo" width={70} height={70} className='object-contain object-top pt-2' />
            </div> */}
            <div className='basis-4/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.title} | {props.company} </a>
                <div className='mb-2 text-surface-600'>{props.startDate} - {props.endDate} | {props.location}</div>
                <div className='text-surface-600 mb-4'>
                    <ul className="list-disc">
                        {props.description.map(function (paragraph, index) {
                            return (
                                <li key={index} className="mb-2 ml-6">
                                    <div dangerouslySetInnerHTML={{ __html: paragraph }}></div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='flex flex-row'>
                    {props.skills ? props.skills.map(function(object, index){
                        return <div key={object} className='bg-surface-400 py-1 px-3 rounded-full text-xs mr-2'>{object}</div>
                    }) : ""}
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem