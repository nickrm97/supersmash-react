import React, {Component} from 'react';


interface UpdateFormProps{
    name: string,
    updateCharacter(update: string):void
}

interface UpdateFormState{
    name: string,
}

class UpdateForm extends Component<UpdateFormProps,UpdateFormState>{
    constructor(props: UpdateFormProps){
        super(props);
        this.state = {   
            name: this.props.name
        }
    }

    handleChange = (event: React.FormEvent) =>{
        this.setState({name: (event.target as HTMLInputElement).value});

        //  if (this.state.name != this.props.name){
        //     this.setState({name: this.props.name})
        // }
    }

    handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault();
        this.props.updateCharacter(this.state.name);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default UpdateForm;
