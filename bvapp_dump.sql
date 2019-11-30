--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

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

SET default_with_oids = false;

--
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employee (
    id integer NOT NULL,
    first_name character varying(100),
    last_name character varying(100),
    description character varying(500),
    myuser_id integer NOT NULL,
    version integer NOT NULL
);


ALTER TABLE public.employee OWNER TO postgres;

--
-- Name: employee2; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employee2 (
    id integer NOT NULL,
    first_name character varying(100),
    last_name character varying(100),
    description character varying(500),
    myuser_id integer NOT NULL,
    version integer NOT NULL
);


ALTER TABLE public.employee2 OWNER TO postgres;

--
-- Name: employee2_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.employee2_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employee2_id_seq OWNER TO postgres;

--
-- Name: employee2_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.employee2_id_seq OWNED BY public.employee2.id;


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
-- Name: game; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.game (
    id integer NOT NULL,
    myuser_id integer NOT NULL,
    sportcenterid integer NOT NULL,
    priceperperson numeric(18,2) NOT NULL,
    isprivate boolean NOT NULL,
    gamedate date NOT NULL,
    gametime time without time zone NOT NULL,
    gameisfull boolean NOT NULL,
    gameispast boolean NOT NULL,
    description character varying(1000),
    version integer NOT NULL
);


ALTER TABLE public.game OWNER TO postgres;

--
-- Name: game_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.game_id_seq OWNER TO postgres;

--
-- Name: game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.game_id_seq OWNED BY public.game.id;


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
-- Name: my_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.my_user (
    id integer NOT NULL,
    name character varying(100),
    password character varying(100),
    roles character varying(50)
);


ALTER TABLE public.my_user OWNER TO postgres;

--
-- Name: my_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.my_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.my_user_id_seq OWNER TO postgres;

--
-- Name: my_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.my_user_id_seq OWNED BY public.my_user.id;


--
-- Name: myuser; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.myuser (
    id integer NOT NULL,
    name character varying(100),
    password character varying(100),
    roles character varying(50)
);


ALTER TABLE public.myuser OWNER TO postgres;

--
-- Name: myuser_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.myuser_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.myuser_id_seq OWNER TO postgres;

--
-- Name: myuser_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.myuser_id_seq OWNED BY public.myuser.id;


--
-- Name: employee id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee ALTER COLUMN id SET DEFAULT nextval('public.employee_id_seq'::regclass);


--
-- Name: employee2 id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee2 ALTER COLUMN id SET DEFAULT nextval('public.employee2_id_seq'::regclass);


--
-- Name: game id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game ALTER COLUMN id SET DEFAULT nextval('public.game_id_seq'::regclass);


--
-- Name: my_user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.my_user ALTER COLUMN id SET DEFAULT nextval('public.my_user_id_seq'::regclass);


--
-- Name: myuser id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.myuser ALTER COLUMN id SET DEFAULT nextval('public.myuser_id_seq'::regclass);


--
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employee (id, first_name, last_name, description, myuser_id, version) FROM stdin;
450	Frodo	Baggins	ring bearer	448	0
451	Bilbo	Baggins	burglar	448	0
452	Gandalf	the Grey	wizard	448	0
453	Gandalf2	the Grey2	wizard	448	0
454	Gandalf3	the Grey3	wizard	448	0
455	Gandalf4	the Grey4	wizard	448	0
456	Gandalf5	the Grey5	wizard	448	0
457	Gandalf6	the Grey6	wizard	448	0
458	Gandalf7	the Grey7	wizard	448	0
459	Gandalf8	the Grey8	wizard	448	0
460	Gandalf9	the Grey9	wizard	448	0
461	Gandalf10	the Grey10	wizard	448	0
462	Samwise	Gamgee	gardener	449	0
463	Merry	Brandybuck	pony rider	449	0
464	Peregrin	Took	pipe smoker	449	0
465	Dummy character	Surname	Job updated	448	1
475	Dummy character	Surname	Job updated	448	1
476	Dummy character	Surname	Job updated	448	1
477	Dummy character	Surname	Job	448	0
478	Dummy character	Surname	Job	448	0
\.


--
-- Data for Name: employee2; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employee2 (id, first_name, last_name, description, myuser_id, version) FROM stdin;
1	Frodozzo	Baggins	ring bearer	1	0
2	Gandalf	the Grey	wizard	1	0
3	Stefano	Di Caro	Test	1	0
4	Aragorn	Elessar	Vagabond	1	0
5	Carlo	Rossi	Accountant	1	0
6	Gimli	Son of Gloin	Dwarf	1	0
7	Legolas		elf	1	0
8	Gloin	Father of Gimli	warrior	1	0
9	Dummy character	Surname	Job updated	1	1
10	Dummy character	Surname	Job	1	0
11	Samwise	Gamgee	gardener	2	0
12	Merry	Brandybuck	pony rider	2	0
13	Peregrin	Took	pipe smoker	2	0
\.


--
-- Data for Name: game; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.game (id, myuser_id, sportcenterid, priceperperson, isprivate, gamedate, gametime, gameisfull, gameispast, description, version) FROM stdin;
1	448	1	100.00	f	2019-12-25	15:00:00	f	f	description test	0
\.


--
-- Data for Name: my_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.my_user (id, name, password, roles) FROM stdin;
307	greg	$2a$10$0WfvL7hMaAb/NR9Nmst7bOkduPQzcYuc2HXocw/sHHXvc9VNVBfe.	STD_USER
308	oliver	$2a$10$wgiNEeTp05q8hfaf.5YIQe7kKtUOD4IJPJGjCpH4dyfLj6dfOdEjG	STD_USER
\.


--
-- Data for Name: myuser; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.myuser (id, name, password, roles) FROM stdin;
448	greg	$2a$10$VJSseFaL3SR32Ff5Rph3jeYj5GtJb1Hm2zfdtMZnaBS7Hl6Fz6jHa	ROLE_USER
449	oliver	$2a$10$6oY0pWyQIg/yD3P78GF.XunrqS9bFWNE.ChQJxbmlBFAdPG5Fw/Ya	ROLE_USER
\.


--
-- Name: employee2_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employee2_id_seq', 13, true);


--
-- Name: employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employee_id_seq', 13, true);


--
-- Name: game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.game_id_seq', 1, true);


--
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hibernate_sequence', 478, true);


--
-- Name: my_seq_gen; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.my_seq_gen', 1, false);


--
-- Name: my_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.my_user_id_seq', 2, true);


--
-- Name: myuser_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.myuser_id_seq', 1, false);


--
-- Name: employee2 employee2_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee2
    ADD CONSTRAINT employee2_pkey PRIMARY KEY (id);


--
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id);


--
-- Name: game game_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game
    ADD CONSTRAINT game_pkey PRIMARY KEY (id);


--
-- Name: my_user my_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.my_user
    ADD CONSTRAINT my_user_pkey PRIMARY KEY (id);


--
-- Name: myuser myuser_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.myuser
    ADD CONSTRAINT myuser_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

