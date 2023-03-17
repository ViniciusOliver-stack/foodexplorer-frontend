import { Container } from "./styles";

export function Button({ icon: Icon, title, value, ...rest }) {
    return (
        <Container
        type="button"
        {...rest}
        >
            {Icon && <Icon size={21} />}
            {title} {value}
        </Container>
    );
}
