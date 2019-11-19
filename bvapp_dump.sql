--
-- PostgreSQL database dump
--

-- Dumped from database version 12.0
-- Dumped by pg_dump version 12.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employee (
    id integer NOT NULL,
    first_name character varying(500),
    last_name character varying(500),
    description character varying(500),
    manager_id integer NOT NULL,
    version integer
);


ALTER TABLE public.employee OWNER TO postgres;

--
-- Name: employee_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employee_id_seq OWNER TO postgres;

--
-- Name: employee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.employee_id_seq OWNED BY public.employee.id;


--
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hibernate_sequence OWNER TO postgres;

--
-- Name: manager; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.manager (
    id integer NOT NULL,
    name character varying(500),
    password character varying(500),
    roles character varying(500)
);


ALTER TABLE public.manager OWNER TO postgres;

--
-- Name: manager_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.manager_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.manager_id_seq OWNER TO postgres;

--
-- Name: manager_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.manager_id_seq OWNED BY public.manager.id;


--
-- Name: my_seq_gen; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.my_seq_gen
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.my_seq_gen OWNER TO postgres;

--
-- Name: theuser; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.theuser (
    id integer NOT NULL,
    name character varying(50),
    email character varying(50)
);


ALTER TABLE public.theuser OWNER TO postgres;

--
-- Name: theuser_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.theuser_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.theuser_id_seq OWNER TO postgres;

--
-- Name: theuser_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.theuser_id_seq OWNED BY public.theuser.id;


--
-- Name: employee id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee ALTER COLUMN id SET DEFAULT nextval('public.employee_id_seq'::regclass);


--
-- Name: manager id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.manager ALTER COLUMN id SET DEFAULT nextval('public.manager_id_seq'::regclass);


--
-- Name: theuser id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.theuser ALTER COLUMN id SET DEFAULT nextval('public.theuser_id_seq'::regclass);


--
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employee (id, first_name, last_name, description, manager_id, version) FROM stdin;
163	Frodozzo	Baggins	ring bearer	161	0
164	Bilbo	Baggins	burglar	161	0
165	Gandalf	the Grey	wizard	161	0
166	Gandalf2	the Grey2	wizard	161	0
171	Gandalf7	the Grey7	wizard	161	0
173	Gandalf9	the Grey9	wizard	161	0
174	Gandalf10	the Grey10	wizard	161	0
175	Samwise	Gamgee	gardener	162	0
176	Merry	Brandybuck	pony rider	162	0
177	Peregrin	Took	pipe smoker	162	0
\.


--
-- Data for Name: manager; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.manager (id, name, password, roles) FROM stdin;
161	greg	$2a$10$tfuduldMkp0FuOeBY9fXaeYBavUcImUuF56lh6aP7pQ1i9xe3Daau	ROLE_MANAGER
162	oliver	$2a$10$V376WQYEhwMyneQVHYYnkOsf23epBAuORqfbu.oOEOHfNxDBHemy6	ROLE_MANAGER
\.


--
-- Data for Name: theuser; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.theuser (id, name, email) FROM stdin;
1	Stefano	email@email.email
\.


--
-- Name: employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employee_id_seq', 1, false);


--
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hibernate_sequence', 177, true);


--
-- Name: manager_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.manager_id_seq', 1, false);


--
-- Name: my_seq_gen; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.my_seq_gen', 1, false);


--
-- Name: theuser_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.theuser_id_seq', 1, true);


--
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id);


--
-- Name: manager manager_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.manager
    ADD CONSTRAINT manager_pkey PRIMARY KEY (id);


--
-- Name: theuser theuser_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.theuser
    ADD CONSTRAINT theuser_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

