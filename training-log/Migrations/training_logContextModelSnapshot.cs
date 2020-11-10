﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using training_log.Models;

namespace training_log.Migrations
{
    [DbContext(typeof(training_logContext))]
    partial class training_logContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("training_log.Models.Exercicio", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<double>("Carga")
                        .HasColumnType("double");

                    b.Property<string>("Descricao")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("Repeticoes")
                        .HasColumnType("int");

                    b.Property<int>("Series")
                        .HasColumnType("int");

                    b.Property<int>("SessaoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("SessaoId");

                    b.ToTable("Exercicios");
                });

            modelBuilder.Entity("training_log.Models.Sessao", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("DataSessao")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Observacoes")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.ToTable("Sessoes");
                });

            modelBuilder.Entity("training_log.Models.Exercicio", b =>
                {
                    b.HasOne("training_log.Models.Sessao", "Sessao")
                        .WithMany("ExerciciosList")
                        .HasForeignKey("SessaoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
