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
-- Name: game; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.game (
    id integer NOT NULL,
    myuser_id integer NOT NULL,
    sportcenter_id integer NOT NULL,
    priceperperson numeric(18,2) NOT NULL,
    isprivate boolean NOT NULL,
    gamedate date NOT NULL,
    gametime time without time zone NOT NULL,
    gameisfull boolean NOT NULL,
    gameispast boolean NOT NULL,
    gameiscancelled boolean NOT NULL,
    description character varying(1000),
    version integer NOT NULL,
    kurt integer NOT NULL
);


ALTER TABLE public.game OWNER TO postgres;

--
-- Name: gameparticipant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gameparticipant (
    id integer NOT NULL,
    playernumber integer,
    game_id integer,
    myuser_id integer,
    noshow boolean
);


ALTER TABLE public.gameparticipant OWNER TO postgres;

--
-- Name: gameparticipant_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gameparticipant_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gameparticipant_id_seq OWNER TO postgres;

--
-- Name: gameparticipant_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gameparticipant_id_seq OWNED BY public.gameparticipant.id;


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
-- Name: my_user_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.my_user_detail (
    id integer,
    phone character varying(50),
    gpsx numeric(12,8),
    gpsy numeric(12,8),
    playedcount integer,
    noshowcount integer,
    myuser_id integer,
    version integer,
    mydate date
);


ALTER TABLE public.my_user_detail OWNER TO postgres;

--
-- Name: myuser; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.myuser (
    id integer NOT NULL,
    name character varying(100),
    password character varying(100),
    roles character varying(50),
    email character varying(100),
    firstname character varying(100),
    lastname character varying(100)
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
-- Name: sportcenter; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sportcenter (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    street character varying(100) NOT NULL,
    city character varying(100) NOT NULL,
    postcode character varying(100),
    country character varying(100),
    gpsx numeric(12,8),
    gpsy numeric(12,8),
    version integer NOT NULL,
    website character varying(100),
    kurtmax integer
);


ALTER TABLE public.sportcenter OWNER TO postgres;

--
-- Name: sportcenter_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sportcenter_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sportcenter_id_seq OWNER TO postgres;

--
-- Name: sportcenter_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sportcenter_id_seq OWNED BY public.sportcenter.id;


--
-- Data for Name: game; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.game (id, myuser_id, sportcenter_id, priceperperson, isprivate, gamedate, gametime, gameisfull, gameispast, gameiscancelled, description, version, kurt) FROM stdin;
204	202	4	600.00	f	2020-02-21	14:30:00	f	f	f	First game	0	12
207	200	2	600.00	f	2020-02-25	16:00:00	f	f	t	Game	1	10
223	220	2	600.00	f	2020-02-21	15:30:00	f	f	f		0	1
226	224	4	800.00	t	2020-02-22	14:00:00	f	f	f		0	5
227	224	4	150.00	f	2020-03-11	13:30:00	f	f	f		0	13
232	224	3	150.00	f	2020-01-22	20:00:00	f	f	f		0	1
213	200	3	200.00	f	2020-09-15	16:30:00	f	f	t		1	1
211	200	2	600.00	f	2020-08-28	20:00:00	f	f	t		1	1
242	200	3	600.00	f	2020-02-23	16:00:00	f	f	f		0	1
209	200	1	300.00	f	2020-01-14	20:00:00	f	f	t		1	1
244	200	2	500.00	t	2020-03-05	15:00:00	f	f	t		1	8
245	200	2	200.00	f	2020-09-23	11:00:00	f	f	f		0	1
246	200	2	100.00	f	2020-04-29	17:00:00	f	f	f		0	1
247	200	2	100.00	f	2020-04-30	15:30:00	f	f	f		0	1
249	200	2	300.00	f	2020-10-30	09:00:00	f	f	f		0	1
251	200	2	124.00	f	2020-03-12	20:00:00	f	f	f		0	7
252	200	2	600.00	f	2020-01-31	20:00:00	f	f	f		0	1
253	200	2	100.00	f	2020-01-31	20:00:00	f	f	f		0	1
254	200	2	100.00	f	2020-01-30	20:00:00	f	f	f		0	1
255	200	1	100.00	f	2020-01-26	23:00:00	f	f	f		0	1
268	200	2	500.00	f	2021-08-02	15:00:00	f	f	f	description	0	3
269	200	2	500.00	f	2025-02-28	15:00:00	f	f	f	description	0	3
272	200	2	200.00	f	2020-02-29	19:00:00	f	f	f	Testing sportcenter name	0	1
347	200	4	5000.00	f	2030-02-02	20:00:00	f	f	f	Game used for testing API	0	1
410	200	3	3000.00	f	2031-02-26	20:00:00	f	f	f	Test API 2	0	1
414	220	2	3500.00	f	2032-02-02	20:00:00	t	f	f	Test API 3	1	1
250	200	4	600.00	f	2020-11-18	02:30:00	t	f	f		7	15
214	200	1	300.00	t	2020-10-20	20:00:00	t	f	f		1	1
248	200	2	1500000000.00	f	2020-07-31	20:00:00	f	f	t		1	2
\.


--
-- Data for Name: gameparticipant; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gameparticipant (id, playernumber, game_id, myuser_id, noshow) FROM stdin;
411	1	410	200	f
412	2	410	270	f
413	3	410	220	f
415	1	414	220	f
417	3	414	224	f
418	4	414	216	f
205	1	204	202	f
206	2	204	200	f
208	1	207	200	f
210	1	209	200	f
212	1	211	200	f
218	1	214	216	f
222	3	214	220	f
228	1	227	224	f
229	1	213	224	f
230	2	211	224	f
231	4	214	224	f
233	2	227	200	f
237	2	223	224	f
241	1	226	200	f
243	1	223	200	f
260	1	253	200	f
261	1	252	200	f
263	2	250	220	f
264	3	250	216	f
266	4	250	224	f
267	2	213	200	f
1	2	414	200	f
11	1	250	200	f
12	2	214	200	f
\.


--
-- Data for Name: my_user_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.my_user_detail (id, phone, gpsx, gpsy, playedcount, noshowcount, myuser_id, version, mydate) FROM stdin;
201		0.00000000	0.00000000	0	0	200	0	2020-01-20
203		0.00000000	0.00000000	0	0	202	0	2020-01-20
217		0.00000000	0.00000000	0	0	216	0	2020-01-20
221		0.00000000	0.00000000	0	0	220	0	2020-01-20
225		0.00000000	0.00000000	0	0	224	0	2020-01-20
259		0.00000000	0.00000000	0	0	258	0	2020-01-27
271		0.00000000	0.00000000	0	0	270	0	2020-02-01
\.


--
-- Data for Name: myuser; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.myuser (id, name, password, roles, email, firstname, lastname) FROM stdin;
200	pareto	$2a$10$cn13WTqHmuc3qIP86NLuwuQHGDBW2OgVv.YahLruJGu.oeGGs3Ahq	ROLE_USER	pareto@uni.it	Vilfredo	Pareto
202	admin	$2a$10$JDI0bKKZhDI4t8bifkpmz.h.vzIKE6JePSmR.BUKd1GFwyWO4aLqy	ROLE_ADMIN	admin@admin.com	administrator	administrator
216	barone	$2a$10$OKnoKjArzR09drvcy7Ajx.xXrA8ARllw0fJ8uCAUn8Tyc.BoXW8dy	ROLE_USER	barone@unito.it	Enrico	Barone
220	sraffa	$2a$10$WsF9Cy6EnedzYM94OZTPfuhGwR6SUh7zKSsDfu8.FW.9FjCyXVxlq	ROLE_USER	sraffa@email.it	Piero	Sraffa
224	pacio	$2a$10$SezVYh8kRZQIvf9js4hn.eyuBHMsepJkUL6bhRJeirX0vczMYo3Rq	ROLE_USER	pacioli@siena.it	Luca	Pacioli
258	modigliani	$2a$10$gDC60c0SI2cJkFPJrpkK/.bMwAU7AIWDtQ/f8gsGL3fvXW8yMRxSK	ROLE_USER	fmodigliani@email.be	Franco	Modigliani
270	asmith	$2a$10$7W3NZeytByLwyuR.PlPKEeBp3LUms029W5MmG2xXSeWbbhj4VX7LW	ROLE_USER	a.smith@glasgow.ac.uk	Adam	Smith
\.


--
-- Data for Name: sportcenter; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sportcenter (id, name, street, city, postcode, country, gpsx, gpsy, version, website, kurtmax) FROM stdin;
2	Gutovka	Gutova 39	Prague	10000	Czech Republic	50.07150800	14.49191100	0	https://www.gutovka.cz/	12
1	Beachklub Pankrac	Horackova 1100	Prague	14000	Czech Republic	50.04680900	14.43825600	0	https://www.beachklub.cz/	12
4	DOMYNO Sports Academy	Novodvorská	Prague	14200	Czech Republic	50.01728300	14.45362800	0	http://www.domyno.cz/	12
3	Sportovni areal Beachklub Ladvi	Chabarovicka 1125/4	Prague	18200	Czech Republic	50.13355600	14.47733900	0	https://beachklubladvi.cz/	24
\.


--
-- Name: gameparticipant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gameparticipant_id_seq', 1, false);


--
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hibernate_sequence', 12, true);


--
-- Name: my_seq_gen; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.my_seq_gen', 1, false);


--
-- Name: myuser_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.myuser_id_seq', 1, false);


--
-- Name: sportcenter_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sportcenter_id_seq', 1, false);


--
-- Name: gameparticipant gameparticipant_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gameparticipant
    ADD CONSTRAINT gameparticipant_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

