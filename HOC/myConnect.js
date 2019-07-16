// connect() baby clone

const connect = (mapState, mapDispatch) => (component2Wrap) => {
	return class React.Component {
		constructor() {
			this.state = Provider.getState()
		}

		componentDidMount() {
			this.unsubscribe = store.subscribe(() => {
				this.setState({...store.getState()})
			})
		}

		componentWillUnmount() {
			this.unsubscribe()
		}

		render() {
			return <component2Wrap props={...mapState, ...mapDispatch} />
		}
	}
}